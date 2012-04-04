//<debug>
Ext.Loader.setPath({
	'Ext': 'sdk/src'
});
//</debug>

Ext.application({
	name: 'EM',

	requires: [
	'Ext.MessageBox',
	'Ext.Anim'
	],
	
	controllers: ['MainNav'],
	models: ['Match'],
	stores: ['Matches'],	
	views: ['Main', 'Viewport', 'TopToolbar', 'MainNav', 'MyStats', 'StandingsPage', 'ResultsPage', 'MatchList'],

	icon: {
		57: 'resources/icons/Icon.png',
		72: 'resources/icons/Icon~ipad.png',
		114: 'resources/icons/Icon@2x.png',
		144: 'resources/icons/Icon~ipad@2x.png'
	},

	phoneStartupScreen: 'resources/loading/Homescreen.jpg',
	tabletStartupScreen: 'resources/loading/Homescreen~ipad.jpg',

	launch: function() {
		var viewport, topToolbar, mainNav, myStats, matchList = {};
		
		// Destroy the #appLoadingIndicator element
		Ext.fly('appLoadingIndicator').destroy();
		
		// Create app components
		topToolbar = Ext.create('EM.view.TopToolbar', {});
		mainNav = Ext.create('EM.view.MainNav', {});	
		main = Ext.create('EM.view.Main', {});	

		viewport = Ext.create('EM.view.Viewport', {});
		viewport.add(topToolbar);
		viewport.add(mainNav);
		viewport.add(main);

		Ext.Viewport.add(viewport);	
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
	 * Converts a field value from a model to lowercase.
	 */
	util.convertFieldValueToLowerCase = function(value, record) {
		return record.get(value).toLowerCase();
	}	
	
	/**
	 * Returns either the requested field value of a model or a default value if the field does not exist. 
	 * The defaultValue will fallback to &nbsp; if no other defaultValue is passed in. 
	 */
	util.toFieldValueOrDefault = function(value, record, defaultValue) {
		if (typeof record.get(value) != 'undefined') {
			return record.get(value);
		}
		else {
			if (typeof defaultValue == 'undefined') {
				defaultValue = '&nbsp';
			}
			return defaultValue;
		}	
	}
		
	return util;
})();