Ext.define('EM.view.TopToolbar', {
	extend: 'Ext.Toolbar',
	xtype: 'toptoolbar',
	
	defaults: {
		iconMask: true,
	},

	config: {
		id: 'top-toolbar',
		
		items: [
		{
			xtype: 'container',
			docked: 'right',
				
			html: [
				'<div class="user name"></div><img class="settings" src="resources/images/cog.png" />'
			]
		}		
		]		
	}
})