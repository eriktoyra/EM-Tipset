Ext.define('EM.controller.MainPanel', {
	extend: 'Ext.app.Controller',

	init: function() {
		console.log("Init in MainPanel controller.");
	},
	
	launch: function() {
		console.log("Launch in MainPanel controller.");
	},

	config: {
		refs: {
			forgotPasswordButton: '#login-form #forgot-password',
			loginButton: '#login-form #login',
			loginForm: '#login-form',
			mainPanel:'#main-panel',
		},
		control: {
			forgotPasswordButton: {
				tap: 'doForgotPassword'
			},
			loginButton: {
				tap: 'doLogin'
			},			
		}
	},
	
	doForgotPassword: function() {
		// TODO: Forgot password functionality.
		console.log("User pressed the Glömt ditt lösenord? button.")
	},

	doLogin: function() {
		console.log("Login...");
		// TODO: Validate the login to decide if the user has a valid login or not. If it has, show the application.
		// TODO: Move everything related to login to a Login controller?
		if (this.doLoginRequest()) { // ! (not) this line to open the app for now
			this.getMainPanel().setActiveItem(1);
		}
	},

	doLoginRequest: function() {
		console.log(this.getLoginForm());
		var loginForm = this.getLoginForm();

		loginForm.setMasked({
            xtype: 'loadmask',
            message: 'Laddar EM-Tipset...'
        });

		Ext.Ajax.request({
		    url: '/login',
		    method: 'POST',
		    timeout: 10000,

		    headers: {
		        "Content-Type": "application/json"
		    },

		    params: JSON.stringify({
		    	"Username": "tjalle",
		    	"Password": "mittpwd"
		    }),

		    callback: function(response, successful) {
		        if (successful) {
		            console.log("Successfylly authenticated.");
		            loginForm.unmask();
		            return true;
		        } else {
					console.log("Failed authentication.");
					loginForm.unmask();
					return false;
				}
        	}
		})
	},
});