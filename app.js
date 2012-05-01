//<debug>
Ext.Loader.setPath({
	'Ext': 'sdk/src'
});
//</debug>

Ext.application({
	name: 'EM',

	requires: [
		'Ext.SegmentedButton',
	],
	
	controllers: [
		'MainNav',
		'MainPanel',		
		'ResultsPage'
	],
	models: [
		'Match', 
		'Round',
		'User'
	],
	stores: [
		'Matches', 
		'RememberMe',
		'Rounds',
	],	
	views: ['Main', 'Viewport', 'TopToolbar', 'LastUpdated', 'LoginForm', 'MainNav', 'MessageAtTop', 'StandingsPage'],

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



		var loginForm = Ext.create('EM.view.LoginForm', {});
		var viewport = Ext.create('EM.view.Viewport', {});

		var mainPanel = new Ext.Panel({
			id: 'main-panel',
			layout: {
				type: 'card',
				animation: 'flip'
			},
			'fullscreen': true,
			items: [
				loginForm,
				viewport
			],
		});

		//TODO: If the user has a "Remember Me" post, show the viewport first, followed by the loginForm, otherwise the other way around
		mainPanel.setActiveItem(1);
	},

	onUpdated: function() {
		Ext.Msg.confirm(
			"Application Update",
			"This application has just successfully been updated to the latest version. Reload now?",
			function() {
				window.location.reload();
			}
		);
	},

	// Custom global functions
	convertUnixTimeToMilliseconds: function(unixTime) {
		return unixTime * 1000;
	}
});

/**
 * Utility functions that is useful throughout the app
 */ 
var util = (function() {
	var util = {};

	util.convertUnixTimeToMilliseconds = function(unixTime) {
		return unixTime * 1000;
	}

	return util;
})();