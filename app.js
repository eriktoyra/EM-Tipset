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

		var loginForm = Ext.create('EM.view.LoginForm', {}),
			viewport = Ext.create('EM.view.Viewport', {}),
			items = [];
		
		// If we have "Remember Me" data for the user we could safely let the user automatically login
		if (this.mayLoginUsingRememberMe()) {
			items = [
				viewport,
				loginForm
			];
		} else {
			items =  [
				loginForm,
				viewport
			]
		}

		var mainPanel = new Ext.Panel({
			id: 'main-panel',
			layout: {
				type: 'card',
				animation: 'flip'
			},
			'fullscreen': true,
			items: items
		});
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

	/**
	 * Loads the RememberMe store and checks if we have any stored information. 
	 * If we do, it means we have what we need to let the user automatically login.
	 */
	mayLoginUsingRememberMe: function() {
		var rememberMe = Ext.getStore("RememberMe");
		rememberMe.load();

		if (rememberMe.getCount() > 0) {
	        return true;
	    }

	    return false;
	},

	// Custom global functions
	convertUnixTimeToMilliseconds: function(unixTime) {
		return unixTime * 1000;
	}
});