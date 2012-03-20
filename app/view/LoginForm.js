Ext.define('EM.view.LoginForm', {
	extend: 'Ext.form.Panel',
	xtype: 'loginform',	
	scrollable: false,
	
	requires: [
	'Ext.form.FieldSet',
	'Ext.field.Email',
	'Ext.field.Password'
	],

	config: {
		title: 'Login',
		centered: true,		
		height: 240,
		width: '60%',
		url: 'login.action',
		layout: 'vbox',
		scrollable:'false',

		items: [
		{
			xtype: 'panel',
			
			config: {
				cls: 'login'
			},

			html: [
			'<h1>Login</h1>'
			]
		},

		{
			xtype: 'fieldset',
			items: [
				{
					xtype: 'emailfield',
					label: 'Email',
					name: 'email',
					placeHolder: 'thomas.ravelli@example.com',
					required: true,
					clearIcon: true
				},
				{
					xtype: 'passwordfield',
					label: 'Password',
					name: 'password',
					placeHolder: 'Enter your password',
					required: true,
					clearIcon: true
				}
			]
		},
		
		{
			xtype: 'button',
			text: 'Login',
			ui: 'confirm',
	    iconMask: true,			
			/*handler: function() {
				this.up('loginform').submit();
			}*/
		}		
		]
	}	
})