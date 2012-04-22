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
		            	name: 'remember-me',
		            	label: 'Kom ihåg mig',
		            	labelWidth: '77.5%',
		            	required: false
		            },
				]
			},
            {
            	xtype: 'button',
            	text: 'Logga in',
				id: 'login',
            },
            {
            	html: '<hr />'
            },
            {
            	xtype: 'button',
            	text: 'Glömt ditt lösnord?',
				id: 'forgot-password',
            }           

        ],
	}		
})