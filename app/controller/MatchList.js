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
Ext.define('EM.controller.MatchList', {
	extend: 'Ext.app.Controller',

    init: function() {
    	// Create the stores that we need for the match list
        var roundsStore = Ext.create('EM.store.Rounds', {});
        var matchStore = Ext.create('EM.store.Matches', {});
        var rounds = [];

       	//	Load the Rounds store which holds all of the data read from matches.json.
        //	After the data has been loaded we add the match data to the matchStore.
        roundsStore.load({
            callback: function() {
                roundsStore.each(function(round) {
                    var data = round.data;

                    rounds.push({
                        id: 'round-' + data.id + '-selector',
                        text: data.name,
                        cls: (data.isLocked ? 'round-locked' : 'round-open'),
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
    },

    config: {
        refs: {
            matchList: '#match-list',
            resultsPage: '#results-page',
            roundSelector: '#round-selector'
        },

        control: {
            '#round-1-selector': {
                tap: 'doRoundFilter'
            },
            '#round-2-selector': {
                tap: 'doRoundFilter'
            },
            '#round-3-selector': {
                tap: 'doRoundFilter'
            },
            '#round-4-selector': {
                tap: 'doRoundFilter'
            },
            '#round-5-selector': {
                tap: 'doRoundFilter'
            },
            '#round-6-selector': {
                tap: 'doRoundFilter'
            }
        }
    },    

    /**
     * Filter the Round store by the passed in round name.
     */
    doRoundFilter: function(button, event, eventOpts) {
        var store = Ext.getStore('Matches');

        // Clear all existing filters first...
        store.clearFilter();

        // ... then apply the selected filter
        store.filterBy(function(record, id) {
            return record.getRound().get('name') == button.config.text
        }, this);
    }
});