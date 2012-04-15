/**
 * MatchList controller
 */
Ext.define('EM.controller.MatchList', {
	extend: 'Ext.app.Controller',

    init: function() {
    	// Create the stores that we need for the match list
        var roundsStore = Ext.create('EM.store.Rounds', {});
        var matchStore = Ext.create('EM.store.Matches', {});
         
       	//	Load the Rounds store which holds all of the data read from matches.json.
        //	After the data has been loaded we add the match data to the matchStore.
        roundsStore.load({
            callback: function() {                
                roundsStore.each(function(round) {
                    round.matches().each(function(match) {
                        matchStore.add(match);
                    });
                });
            }
        });
    },
    launch: function() {
    	//console.log("launch in controller Rounds");
    	// TODO: Create the #main view here?
        // Reset the selection in the list when the filter has changed.
    }
});