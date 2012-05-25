Ext.define('EM.view.Footer', {
	extend: 'Ext.Toolbar',
	xtype: 'footer',

	config: {
		id: 'footer',
		
		items: [
			{
				xtype: 'button',
				text: 'Regler',
				handler: function() {
					
				}
			},
			{
				xtype: 'button',
				text: 'Bjud in en kompis',
				handler: function() {
					
				}
			},
			{
				xtype: 'button',
				text: 'Byt lösenord',
				handler: function() {
					
				}
			},
			{
				xtype: 'button',
				text: 'Logga ut',
				id: 'logout',
			},
		],
	}
})