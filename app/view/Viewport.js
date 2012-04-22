Ext.define('EM.view.Viewport', {
	extend: 'Ext.Panel',		
	
	config: {
		id: 'main-viewport-panel',
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
