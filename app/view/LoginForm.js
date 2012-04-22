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
		defaults: {
            required: true,
            labelAlign: 'left'
        },		

		items: [
			{
				xtype: 'fieldset',
				items: [
		            {
		                xtype: 'emailfield',
		                name: 'email',
		                label: 'Epostadress',
		                placeHolder: 'Din epostadress'
		            },
		            {
		                xtype: 'passwordfield',
		                name: 'password',
		                label: 'Lösenord',
		                placeHolder: 'Ditt lösnord'                
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