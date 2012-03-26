//<debug>
Ext.Loader.setPath({
	'Ext': 'sdk/src'
});
//</debug>

Ext.application({
	controllers: ["MainController"],

	name: 'EM',

	requires: [
	'Ext.MessageBox',
	'Ext.Anim'
	],

	stores: ['Matches'],
	models: ['Match'],
	views: ['Main', 'Viewport', 'TopToolbar', 'MainNav', 'MyStats', 'MatchList', 'Details'],

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

		// Create the viewport, the Container that we will fill with various Components
		Ext.create('EM.view.Viewport');
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
