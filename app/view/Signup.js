Ext.define('EM.view.Signup', {
	extend: 'Ext.form.Panel',
	xtype: 'signupform',
	
	requires: [
		'Ext.form.FieldSet',
		'Ext.field.Email',
		'Ext.field.Password',
		'Ext.field.Select',
		'Ext.field.Toggle'
	],
			
	config: {
		title: 'Signup',
		
		iconCls: 'user',
		iconAlign: 'right',
		url: 'signup.action',
		layout: 'vbox',
		
		items: [
			{
				xtype: 'panel',
				
				config: {
					cls: 'signup',
					styleHtmlContent: true
				},
				
				html: [
					'<h1>Sign Up!</h1>',
					'<p>Sign up and join your friends in the 2012 edition of EM-Tipset.'
				].join("")
			},
			
			{
				xtype: 'fieldset',
				items: [
					{
						xtype: 'textfield',
						label: 'Name',
						name: 'name',
						placeHolder: 'Your name on the form \'Thomas Ravelli\'',
						required: true,
						clearIcon: true											
					}
				]
			},
						
			{
				xtype: 'fieldset',
				title: 'Login Details',
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
						placeHolder: 'Enter six characters minimum',
						required: true,
						clearIcon: true
					},
					{
						xtype: 'passwordfield',
						label: 'Password, confirm',
						name: 'password-confirm',
						placeHolder: 'Same password as above',
						required: true,
						clearIcon: true
					}
				]
			},

			{
				xtype: 'fieldset',
				instructions: 'You need an invite code to sign up. The code has been sent to your email address.',				
				items: [
					{
						xtype: 'textfield',
						label: 'Invite Code',
						name: 'invite-code',
						placeHolder: 'Enter your invite code',
						required: true,
						clearIcon: true											
					}
				]
			},
									
			{
				xtype: 'button',
				text: 'Sign up!',
				ui: 'confirm',
				handler: function() {
					this.up('signupform').submit();
				}
			}
		]
	}	
})