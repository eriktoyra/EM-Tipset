Ext.define('EM.view.Viewport', {
	extend: 'Ext.Container',		
	
	config: {
		fullscreen: true, 
		scrollable: 'vertical',
		
		items: [
			{
				xtype: 'toptoolbar',
				docked: 'top'
			},
			{
				xtype: 'mainnav',
				docked:'top'				
			},
			{
				xtype: 'mystats'
			},
			{
				xtype: 'main'
			}
		]
	}
})
