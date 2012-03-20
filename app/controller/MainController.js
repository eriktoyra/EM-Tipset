Ext.define('EM.controller.MainController', {
    extend: 'Ext.app.Controller',
   config: {
		refs: {
			matchList : '#matchList',
			loginButton: 'loginform button',
            loginForm: 'loginform',
			signUp: '#signUp',
			mainPanel:'mainPanel',
			details: '#details'
		},
        control: {
            matchList: {
					select: function() {
							console.log("select!!!");
							 //Ext.dataview.DataView this, Ext.data.Model record, Object eOpts )
					},
					itemtap: function() {
						console.log("drag!!!");
						
					}
        		},
				loginButton: {
	        		tap: 'doLogin'
	        	},
				signUp: {
	        		tap: 'slideDetailsPanel'
	        	},
				details: {
					tap: 'slideDetailsPanel'
				}
			
			}
    },	

	slideDetailsPanel: function() {
		console.log(this.getLoginButton());
		console.log(this.getMatchList());
		console.log("Slaide!");	
	},

	doLogin: function() {
	    console.log("Login...");
	
		Ext.Viewport.add({
			xtype:'matchList',
			id: 'matchList', 
			left: 0,
			top: 0, 
			width: "80%",
			height: "100%"
		});
		
		Ext.Viewport.add({
			xtype:'details',
			id:'details',
			left: 200,
			top: 0, 
			width: "80%",
			height: "100%"
		});
		
		
		
		
	}
});