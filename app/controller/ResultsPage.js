/**
 * MatchList controller
 */
Ext.define('EM.controller.ResultsPage', {
	extend: 'Ext.app.Controller',

    init: function() {},
    
    launch: function() {},

    config: {
        views: ['MatchList', 'MyStats', 'ResultsPage', 'RoundSelector'],

        refs: {
            lastUpdated: '#last-updated',
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
            '#top-4-and-top-scorer': {
                tap: 'doTop4AndTopScorer'
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
            id: 'top-4-and-top-scorer',
            text: 'Topp 4 & skyttekung',
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
            scope : this, // To be able to reach the controller functions from within the callback function

            callback: function() {
                roundsStore.each(function(round) {
                    var data = round.data;

                    rounds.push({
                        id: 'round-' + data.roundId + '-selector',
                        text: data.name,
                        iconAlign: 'right',
                        iconCls: (data.isLocked? 'round-locked' : 'round-open'),
                    });

                    round.matches().each(function(match) {
                        matchStore.add(match);
                    });
                });

                this.addRoundFilterMenu(rounds);
                this.getResultsPage().add(this.getMatchList());

                this.doUpdateLastUpdated();
                this.roundFilterByKey('roundId', 5); // Filter the matchlist and display the first round of matches.                        
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

        rounds = this.calculateItem(rounds);

        roundMenu.setItems(rounds);
        roundMenu.setAllowDepress(false);
        //roundMenu.setActiveItem(this.calculateActiveItem(rounds));
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
     * Display the 'Topp 4 & skyttekung' page.
     */
    doTop4AndTopScorer: function(button, event, eventOpts) {
        console.log("Tapped on Topp 4 & skyttekung");
    },

    /**
     * Calculates which item shold be marked as currently selected by investigating 
     * the startDate property of each round.
     */
    calculateActiveItem: function(rounds) {
        var selectedItem = 0;
        var now = new Date(Date.now());
        
        if (now < new Date('2012-06-08 00:00:01')) { // The competition has not started yet, so default to the first item
            console.log('EM not started, so display Topp 4 & skyttekung');
            return selectedItem;
        }

        for(round in rounds) {
            if (round.startDate <= now && round.lockedDate >= now) {
                console.log('Active round is: ', selectedItem);
                return selectedItem;
            }            
            selectedItem++;
        }
/*
        rounds.each(function(round) {
            if (round.startDate <= now && round.lockedDate >= now) {
                break;         
            }
        });
*/    
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
    }
});