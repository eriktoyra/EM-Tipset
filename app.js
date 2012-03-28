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
	stores: ['Matches'],
	models: ['Match'],
	views: ['Main', 'Viewport', 'TopToolbar', 'MainNav', 'MyStats', 'StandingsPage', 'ResultsPage'],

	icon: {
		57: 'resources/icons/Icon.png',
		72: 'resources/icons/Icon~ipad.png',
		114: 'resources/icons/Icon@2x.png',
		144: 'resources/icons/Icon~ipad@2x.png'
	},

	phoneStartupScreen: 'resources/loading/Homescreen.jpg',
	tabletStartupScreen: 'resources/loading/Homescreen~ipad.jpg',

	launch: function() {
		var viewport, topToolbar, mainNav, myStats = {};
		
		// Destroy the #appLoadingIndicator element
		Ext.fly('appLoadingIndicator').destroy();

		// Create the viewport, the Container that we will fill with various Components
//		Ext.create('EM.view.Viewport');
		
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
