Ext.define('EM.view.MainToolbar', {
	extend: 'Ext.Toolbar',
	xtype: 'maintoolbar',

	defaults: {
		iconMask: true,
	},

	config: {
		docked: 'top',
		cls: 'top-panel',
		layout: { },
		title: 'BrunoBet',

		layout: {
			pack: 'right'
		},		
		items: [
		{
			xtype: 'button',
			ui: 'neutral',
			iconCls: 'settings',

			listeners: {
				tap: function() {
					console.log("You tapped the button");
				}
			}
		}			
		]		
	}
})