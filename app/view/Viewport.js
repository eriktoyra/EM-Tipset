Ext.define('EM.view.Viewport', {
	extend: 'Ext.Container',

	config: {
		fullscreen: true, 
		layout: 'vbox',

		items: [		
		{
			xtype: 'maintoolbar',
			flex: 1
		},
		{
			xtype: 'mainnav',
			flex: 1			
		},		
		{
			xtype: 'details',
			flex: 1			
		}
		]
	}
})