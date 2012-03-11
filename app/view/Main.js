Ext.define("EM.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.TitleBar'],
    
    config: {
        tabBarPosition: 'bottom',
        
        items: [
            {
							xtype: 'homepanel'
						},
						{
							xtype: 'signupform'
						}, 
						{
							xtype: 'blog'
						}
        ]
    }
});