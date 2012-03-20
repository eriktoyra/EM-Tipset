Ext.define('EM.controller.MainController', {
    extend: 'Ext.app.Controller',
   config: {
		refs: {
			matchList : 'matchList',
			loginButton: 'loginform button',
            loginForm: 'loginform',
			mainPanel:'mainPanel'
			
		},
        control: {
            matchList: {
						select: function() {
							console.log("select!!!");
							 //Ext.dataview.DataView this, Ext.data.Model record, Object eOpts )
							
						
					}
        		},
				loginButton: {
	        		tap: 'doLogin'
	        	}
			}
    },	

	doLogin: function() {
	    console.log("Login... ");
	    console.log(this.getLoginForm().getValues());
	
	console.log(Ext.Viewport.getWidth());
	
	
		Ext.Viewport.add({
			xtype: 'matchList', 
			left: 0,
			top: 0, 
			width: "80%",
			height: "100%"
		
		});
	
		Ext.Viewport.add({
			xtype: 'details', 
			left: 200,
			top: 0, 
			width: "80%",
			height: "100%"
		
		});
		
		
	
		
		// switch card views
		this.getMainPanel().setActiveItem(1);
	}
});