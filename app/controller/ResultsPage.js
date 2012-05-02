var roundMenu =  Ext.create('Ext.SegmentedButton', {
    config: {
        allowDepress: false,
        cls: 'round-selector-items',
        docked: 'top'
    },
});

/**
 * MatchList controller
 */
Ext.define('EM.controller.ResultsPage', {
	extend: 'Ext.app.Controller',

    init: function() {
    	// Create the stores that we need for the match list
        var roundsStore = Ext.create('EM.store.Rounds', {});
        var matchStore = Ext.create('EM.store.Matches', {});
        var rounds = [];

        console.log("Init in ResultsPage controller");

       	//	Load the Rounds store which holds all of the data read from matches.json.
        //	After the data has been loaded we add the match data to the matchStore.
        roundsStore.load({
            callback: function() {
                roundsStore.each(function(round) {
                    var data = round.data;

                    rounds.push({
                        id: 'round-' + data.roundId + '-selector',
                        text: data.name,
                        iconAlign: 'right',
                        iconCls: (data.isLocked ? 'round-locked' : 'round-open'),
                    });

                    round.matches().each(function(match) {
                        matchStore.add(match);
                    });
                });
                roundMenu.setItems(rounds);
            }
        });
    },
    
    launch: function() {       
        this.getRoundSelector().add(roundMenu);
        this.doUpdateLastUpdated();
        this.roundFilterByKey('roundId', 5); // Filter the matchlist and display the first round of matches.
    },

    config: {
        views: ['MatchList', 'MyStats', 'ResultsPage', 'RoundSelector'],

        refs: {
            lastUpdated: '#last-updated',
            matchList: '#match-list',
            resultsPage: '#results-page',
            roundSelector: '#round-selector'
        },

        control: {
            matchList: {
                itemtap: function(a, index, target, record, e, eOpts ) {
                    //TODO: Handle tap events.
                }
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