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
			docked: 'left',

			html: [
				'<img id="em-tipset-logo" src="resources/images/em-tipset-logo.png" />'
			]
		},
		{
			xtype: 'container',
			docked: 'right',
				
			html: [
				'<div class="user name"></div><img id="settings" class="settings" src="resources/images/cog.png" />'
			]
		}		
		]		
	}
})