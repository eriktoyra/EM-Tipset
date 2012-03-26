Ext.define('EM.view.TopToolbar', {
	extend: 'Ext.Toolbar',
	xtype: 'toptoolbar',
	
	defaults: {
		iconMask: true,
	},

	config: {
		id: 'top-toolbar',
		dock: 'top',
		
		items: [
		{
			xtype: 'container',
			right: 0,
			top: '2px',
				
			html: [
				'<span class="user name">Christofer Falkman</span><div class="settings">X</span>'
			]
		}		
		]		
	}
})