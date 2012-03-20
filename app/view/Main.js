Ext.define("EM.view.Main", {
	extend: 'Ext.Panel',
	xtype: 'mainPanel',
	layout: 'card',
    
		config: {
			items: [
				{
					xtype: 'loginform'
				}
			]
		}
});

var button = Ext.create('Ext.Button', {
	id: 'signUp',
    iconCls: 'refresh',
	text: 'Sign Up!',
	ui: 'add',
    iconMask: true
});

Ext.Viewport.add({
	xtype: 'container', 
	right: 10,
	top: 10, 
	width: "300px",
	items: [button] 
});
