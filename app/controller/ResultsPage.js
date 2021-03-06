/**
 * MatchList controller
 */
Ext.define('EM.controller.ResultsPage', {
	extend: 'Ext.app.Controller',

    init: function() {},
    
    launch: function() {},

    config: {
        views: ['Footer', 'MatchList', 'MyStats', 'ResultsPage', 'RoundSelector', 'TopScorer', 'Top4'],

        refs: {
            footer: {
                selector: 'footer',
                xtype: 'footer',
                autoCreate: true
            },
            logoutLink: '#logout',
            lastUpdated: '#matches-last-updated',
            top4: {
                selector: 'top-4',
                xtype: 'top4',
                autoCreate: true
            },
            topScorer: {
                selector: 'top-scorer',
                xtype: 'topscorer',
                autoCreate: true
            },            
            matchList: {
                selector: 'match-list',
                xtype: 'matchlist',
                autoCreate: true
            },
            resultsPage: '#results-page',
            roundSelector: '#round-selector'
        },

        control: {
            matchList: {
                itemtap: function(a, index, target, record, e, eOpts ) {
                    //TODO: Handle tap events.
                    console.log("Tapped on a list item");
                }
            },
            '#top-4-menu-item': {
                tap: 'doTop4'
            },
            '#top-scorer-menu-item': {
                tap: 'doTopScorer'
            },
            '#round-5-selector': {
                tap: 'doRoundFilter'
            },
            '#round-6-selector': {
                tap: 'doRoundFilter'
            },
            '#round-7-selector': {
                tap: 'doRoundFilter'
            },
            '#round-8-selector': {
                tap: 'doRoundFilter'
            },
            '#round-9-selector': {
                tap: 'doRoundFilter'
            },
            '#round-10-selector': {
                tap: 'doRoundFilter'
            }
        }
    },    

    doRoundsRequest: function() {
        // Create the stores that we need for the match list
        var roundsStore = Ext.create('EM.store.Rounds', {});
        var matchStore = Ext.create('EM.store.Matches', {});
        var rounds = [{
            id: 'top-4-menu-item',
            text: 'Topp 4',
            iconAlign: 'right',
            iconCls: 'round-open',  
        },
        {
            id: 'top-scorer-menu-item',
            text: 'Skyttekung',
            iconAlign: 'right',
            iconCls: 'round-open',  
        }];

        roundsStore.setProxy({
            type: 'ajax',
            url: 'http://emtipset.dev.stendahls.se/api/rounds',
            method: 'GET',
            
            headers: {
                'Content-Type': 'application/json',
                'Authorization': EM.app.getUserData('auth')
            },
            reader: {
                type: 'json',
            }
        });
        
        //  Load the Rounds store which holds all of the data read from matches.json.
        //  After the data has been loaded we add the match data to the matchStore.
        roundsStore.load({
            scope: this, // To be able to reach the controller functions from within the callback function

            callback: function() {
                var hasRoundBeenMarkedAsActive = false,
                    activeRoundId = 5; // Default to the first roundId

                roundsStore.each(function(round) {
                    var data = round.data;
                    var isLocked = data.isLocked;

                    rounds.push({
                        id: 'round-' + data.roundId + '-selector',
                        text: data.name,
                        iconAlign: 'right',
                        iconCls: (isLocked? 'round-locked' : 'round-open'),
                        pressed: (!hasRoundBeenMarkedAsActive && !isLocked)
                    });

                    if (!isLocked) {
                        activeRoundId = data.roundId;
                        hasRoundBeenMarkedAsActive = true;
                    }

                    round.matches().each(function(match) {
                        matchStore.add(match);
                    });
                });

                this.addRoundFilterMenu(rounds);
                this.getResultsPage().add(this.getTop4());
                this.getResultsPage().add(this.getTopScorer());
                this.getResultsPage().add(this.getMatchList());
                this.getResultsPage().add(this.getFooter());

                this.doUpdateLastUpdated();
                this.roundFilterByKey('roundId', activeRoundId); // Filter the matchlist and display the first round of matches.                        

                //console.log("logoutLink: ", this.getLogoutLink());
            }
        });
    },

    /**
     * Adds the rounds filter menu options as a segmented button to the round selector.
     */
    addRoundFilterMenu: function(rounds) {
        var roundMenu =  Ext.create('Ext.SegmentedButton', {
            config: {
                allowDepress: false,
                cls: 'round-selector-items',
                docked: 'top'
            },
        });

        roundMenu.setItems(rounds);
        roundMenu.setAllowDepress(false);

        this.getRoundSelector().add(roundMenu);
        this.getRoundSelector().show(); // A must to make #round-selector scrollable
    }, 

    /**
     * Update information about when the data was last updated.
     */
    doUpdateLastUpdated: function() {
        var timestamp = new Date(Date.now());
        var data = {
            lastUpdated: timestamp.format('d mmmm yyyy, HH:MM')
        }

        this.getLastUpdated().setData(data);
    },
     
    /**
     * Filter the Round store by the passed in round name.
     */
    doRoundFilter: function(button, event, eventOpts) {
        this.roundFilterByKey('name', button.config.text);
    },

    /**
     * Display the 'Topp 4' page.
     */
    doTop4: function(button, event, eventOpts) {
        this.getFooter().hide();
        this.getMatchList().hide();
        this.getTopScorer().hide();
        this.getTop4().show();
        this.getFooter().show();
    },

    /**
     * Display the 'Skyttekung' page.
     */
    doTopScorer: function(button, event, eventOpts) {
        this.getFooter().hide();
        this.getMatchList().hide();
        this.getTop4().hide();
        this.getTopScorer().show();
        this.getFooter().show();
    },

    /**
     * Filter the Round store by the passed in key/value pair.
     */
    roundFilterByKey: function(filterKey, filterValue) {
        var store = Ext.getStore('Matches');

        // Deselect any previous selections made in the list to avoid flickering
        this.getMatchList().deselectAll();

        // Clear all existing filters first...
        store.clearFilter();

        // ... then apply the selected filter
        store.filterBy(function(record, id) {
            return record.getRound().get(filterKey) == filterValue
        }, this);
        
        this.getTop4().hide();
        this.getTopScorer().hide();
        this.getMatchList().show();
    }
});