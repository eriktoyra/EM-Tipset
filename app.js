//<debug>
Ext.Loader.setPath({
	'Ext': 'sdk/src'
});
//</debug>

Ext.application({
	name: 'EM',

	/**
	 * API token that are used to communicate with the ReST API.
	 */
	apiToken: '',

	/**
	 * Holds data about the currently logged in user.
	 */
	userData: {},

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
		'RememberMe', 
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
				//animation: 'flip' Removed temporary to avoid crashing OSX.
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

	/**
	 * Sets the API token that we use to communicate with the ReST API.
	 */
	setApiToken: function(token) {
		this.apiToken = token;
	},

	/**
	 * Returns the API token that we use to communicate with the ReST API.
	 */
	getApiToken: function() {
		return this.apiToken;
	},

	/**
	 * Sets user data, such as userId and name. Used to keep information about 
	 * the currently logged in user while he/she is logged in.
	 */
	setUserData: function(userData) {
		this.userData = userData;

		if (userData.auth) {
			this.setApiToken(userData.auth);
		}
	},

	/**
	 * Returns the user data. If a 'key' is passed in that matches one of the existing user data
	 * keys only data for that key is returned. Otherwise the full user data object. If the 'key'
	 * does not exist we return null,
	 */
	getUserData: function(key) {
		if(typeof key == 'undefined') {
			return this.userData;
		}

		if (typeof this.userData[key] != 'undefined') {
			return this.userData[key];
		}

		return null;
	},
});