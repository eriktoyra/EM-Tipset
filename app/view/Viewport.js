Ext.define('EM.view.Viewport', {
	extend: 'Ext.Container',

	config: {
		fullscreen: true, 
		layout: 'vbox',

		items: [
		{
			xtype: 'slideinmenu',
		},
		{
			xtype: 'toolbar',
			docked: 'top',
			flex: 1,
			cls: 'top-panel',

			defaults: {
				iconMask: true,
				ui: 'plain'
			},

			items: [{
				xtype: 'button',
				ui: 'normal',
				icon: 'resources/icons/note1.png',

				listeners: {
					tap: function() {
						console.log("You tapped the button");
					}
				}
			}			
			]
		}
		]
	}
})