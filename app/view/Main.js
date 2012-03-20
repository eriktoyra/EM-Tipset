Ext.define("EM.view.Main", {
    extend: 'Ext.Panel',
    requires: ['Ext.TitleBar'],
    
		config: {
			items: [
				{
					xtype: 'loginform'
				}
			]
		}

		/*
    config: {
        tabBarPosition: 'bottom',
        
        items: [
            {
							xtype: 'homecontainer'
						},
						{
							xtype: 'signupform'
						}, 
						{
							xtype: 'blog'
						},
						{
							xtype: 'resultspanel'
						}
        ]
    }
		*/
});
/*
var button = Ext.create('Ext.Button', {
    iconCls: 'refresh',
		text: 'Sign Up!',
		ui: 'add',
    iconMask: true
});

Ext.Viewport.add({
	xtype: 'container', 
	right: 10,
	top: 10, 
	items: [button] 
});
*/
