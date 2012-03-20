//<debug>
Ext.Loader.setPath({
    'Ext': 'sdk/src'
});
//</debug>

Ext.application({
    controllers: ["MainController"],

    name: 'EM',

    requires: [
        'Ext.MessageBox'
    ],

    views: ['Main', 'LoginForm', 'MatchList', 'Details'],

    icon: {
        57: 'resources/icons/Icon.png',
        72: 'resources/icons/Icon~ipad.png',
        114: 'resources/icons/Icon@2x.png',
        144: 'resources/icons/Icon~ipad@2x.png'
    },

	stores: ['Matches'],
	
	models: ['Match'],
    
    phoneStartupScreen: 'resources/loading/Homescreen.jpg',
    tabletStartupScreen: 'resources/loading/Homescreen~ipad.jpg',

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the login view
        Ext.Viewport.add(Ext.create('EM.view.Main'));
		/*Ext.Viewport.add({
			xclass: 'EM.view.MatchList'
		});*/
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
