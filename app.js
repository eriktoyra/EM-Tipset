//<debug>
Ext.Loader.setPath({
	'Ext': 'sdk/src'
});
//</debug>

Ext.application({
	name: 'EM',

	requires: [
	'Ext.MessageBox',
	'Ext.Anim',
	'Ext.data.proxy.Rest',	
	],
	
	controllers: [
		'MainNav',
		'Rounds'
	],
	models: [
		'Match', 
		'Round'
	],
	stores: [
		'Matches', 
		'Rounds'
	],	
	views: ['Main', 'Viewport', 'TopToolbar', 'MainNav', 'MyStats', 'StandingsPage', 'ResultsPage', 'RoundSelector', 'MatchList'],

	icon: {
		57: 'resources/icons/Icon.png',
		72: 'resources/icons/Icon~ipad.png',
		114: 'resources/icons/Icon@2x.png',
		144: 'resources/icons/Icon~ipad@2x.png'
	},

	phoneStartupScreen: 'resources/loading/Homescreen.jpg',
	tabletStartupScreen: 'resources/loading/Homescreen~ipad.jpg',

	launch: function() {		
		// Destroy the #appLoadingIndicator element
		Ext.fly('appLoadingIndicator').destroy();

		Ext.create('EM.view.Viewport', {});	
	},

	onUpdated: function() {
		Ext.Msg.confirm(
			"Application Update",
			"This application has just successfully been updated to the latest version. Reload now?",
			function() {
				window.location.reload();
			}
		);
	}
});

/**
 * Utility functions that is useful throughout the app
 */ 
var util = (function() {
	var util = {};

	/**
	 * Converts a unix timestamp to millisecond.
	 */ 
	util.convertUnixTimeToMilliseconds = function(unixTime) {
		return unixTime * 1000;
	}

	/**
     * Filter the Round store by the passed in round name.
     */
    util.doFilter = function(filterOption) {
        var store = Ext.getStore('Matches');

        // Clear all existing filters first...
        store.clearFilter();

        // ... then apply the selected filter
        store.filterBy(function(record, id) {
                return record.getRound().get('name') == filterOption;
            }, this);
    }	
		
	return util;
})();