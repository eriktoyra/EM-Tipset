Ext.define('EM.view.Viewport', {
	extend: 'Ext.Container',

	config: {
		fullscreen: true, 
		scrollable: 'vertical',
		
		items: [
		{
			xtype: 'container',	
			
			items: [
			{
				xtype: 'toptoolbar'
			},
			{
				xtype: 'mainnav'
			},
			{
				xtype: 'mystats'
			}
			]				
		},
		{
			xtype: 'container',			
			
			items: [
			{
				xtype: 'container',
					
				html: [
				'Resultatlista m.m.<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>2<br/><br/>'
				]
			}
			]				
		}
		]
	}
})