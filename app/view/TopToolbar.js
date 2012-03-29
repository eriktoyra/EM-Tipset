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
			left: 0,
			top: '2px',
				
			html: [
				'<img class="settings" src="resources/images/cog" /> <div class="user name">Christofer Falkman</div>'
			]
		}		
		]		
	}
})