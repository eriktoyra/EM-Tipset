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
			loginFormFields: '#login-form field',
			mainPanel:'#main-panel',
		},
		control: {
			loginFormFields: {
				focus: 'hideValidationErrorMessage'
			},
			forgotPasswordButton: {
				tap: 'doForgotPassword'
			},
			loginButton: {
				tap: 'doValidateForm'
			},			
		}
	},
	
	doForgotPassword: function() {
		// TODO: Forgot password functionality.
		console.log("User pressed the Glömt ditt lösenord? button.")
	},

	/**
	 * Validate the form data before doing a login attempt.
	 */ 
	doValidateForm: function() {
		var loginForm = this.getLoginForm();
		var userModel = Ext.create('EM.model.User'),
			errors, 
			errorMessage = '<h5>Gult kort!</h5>';
		
		loginForm.updateRecord(userModel);
		errors = userModel.validate();		
		
		if (!errors.isValid()) {
			// At least one form field did not validate
            errors.each(function (err) {
                errorMessage += err.getMessage() + ' ';
            });

            this.showValidationErrorMessage(errorMessage);
        } else {
        	// All form fields are valid, so do a login request
			this.doLoginRequest();
        }

		//console.log(loginForm.getValues());
		// TODO: Move everything related to login to a Login controller?
	},

	/**
	 * Show the validation message if the login form contains form fields that 
	 * does not validate against the model.
	 */
	showValidationErrorMessage: function(errorMessage) {
		if (Ext.getCmp('message-at-top')) {
			this.destroyValidationErrorMessage();
		} 

		var message = Ext.create('EM.view.MessageAtTop', {});
		message.setData({errorMessage: errorMessage});
		message.setListeners({
			tap: {
                element: 'element',
                fn: this.hideValidationErrorMessage
            },
            hide: {
            	element: 'element',
            	fn: this.destroyValidationErrorMessage
            }
		});

		this.getMainPanel().add(message);
	},

	/**
	 * Hide the validation error message.
	 */
	hideValidationErrorMessage: function() {
		console.log("hiding the validation message");
		var message = Ext.getCmp('message-at-top');
		if (message) {
			message.hide();	
		}
	},

	/**
	 * Destroy the validation error message.
	 */
	destroyValidationErrorMessage: function() {
		Ext.getCmp('message-at-top').destroy();	
	},	

	doLoginRequest: function() {
		var loginForm = this.getLoginForm();
		var formFieldValues = loginForm.getValues();

		loginForm.setMasked({
            xtype: 'loadmask',
            message: 'Loggar in...'
        });

		Ext.Ajax.request({
		    url: 'http://emtipset.dev.stendahls.se/api/formlogin',
		    withCredentials: false,
    		useDefaultXhrHeader: false,
    		disableCaching: true,
		    method: 'POST',
		    timeout: 10000,
			scope : this, // To be able to reach the controller functions from within the callback function
		    
		    headers: {
		        'Content-Type': 'application/x-www-form-urlencoded',
		    },

		    params: {
		    	'Username': formFieldValues.email,
		    	'Password': formFieldValues.password,
		    },

		    callback: function(opt, success, response) {
		        if (success) {
		        	loginForm.unmask();

		        	if (true || response.status == 200) { // TODO: hardcoded true until changes are made on the server
						this.getMainPanel().setActiveItem(1);
		        	} else {
		        		this.showValidationErrorMessage('Inloggningen misslyckades. Kontrollera dina loginuppgifter.');	
		        	}
		        	//console.log(response);
		        } else {
					// TODO: This should display the message we get in return from the server when the login attempt fails.
					loginForm.unmask();
					this.showValidationErrorMessage('Kunde inte kontakta servern. Försök igen lite senare.');
				}
        	}
		});

	},
});