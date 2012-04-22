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
		this.getMainPanel().setActiveItem(1);
	}
});