Ext.define('EM.view.LoginForm', {
	extend: 'Ext.form.Panel',
	xtype: 'formpanel',
	scrollable: false,
	fullscreen: true,
	
	requires: [
		'Ext.form.FieldSet',
		'Ext.field.Email',
		'Ext.field.Password'
	],

	config: {
		id: 'login-form',		
		items: [		
			{
				html: '<img id="app-logo" src="resources/images/uefa-tips-logo.png"/>'
			},
			{
				xtype: 'fieldset',
				defaults: {
		            required: true,	            
		        },
				items: [
		            {
		                xtype: 'emailfield',
		                name: 'email',
		                placeHolder: 'Epostadress'
		            },
		            {
		                xtype: 'passwordfield',
		                name: 'password',
		                placeHolder: 'Lösenord'                
		            },				
				]
			},
			{
				xtype: 'fieldset',
				items: [
		            {
		            	xtype: 'checkboxfield',
		            	name: 'rememberMe',
		            	label: 'Kom ihåg mig',
		            	labelWidth: '77.5%',
		            	required: false
		            },
				]
			},	
            {
				id: 'login',            	
            	xtype: 'button',
            	text: 'Logga in',
            },
            {
            	html: '<hr />'
            },
            {
				id: 'forgot-password',            	
            	xtype: 'button',
            	text: 'Glömt ditt lösenord?',
            }           

        ],
	}		
})