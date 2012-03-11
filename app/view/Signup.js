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
		title: 'Skapa konto',
		
		iconCls: 'user',
		iconAlign: 'right',
		url: 'contact.php',
		layout: 'vbox',
		
		items: [
			{
				xtype: 'panel',
				
				config: {
					cls: 'signup',
					styleHtmlContent: true
				},
				
				html: [
					'<h1>Skapa konto</h1>',
					'<p>Skapa ett konto i EM TIPSET 2012 och...'
				].join("")
			},
			
			{
				xtype: 'fieldset',
				title: 'Konto',
				instructions: 'Att ange namn och e-postadress &auml;r obligatoriskt.',
				items: [
					{
						xtype: 'textfield',
						label: 'Namn',
						name: 'name',
						required: true,
						clearIcon: true											
					},
					{
						xtype: 'emailfield',
						label: 'E-post',
						name: 'email',
						required: true,
						clearIcon: true
					},
					{
						xtype: 'passwordfield',
						label: 'L&ouml;senord',
						name: 'password',
						placeHolder: 'Minst sex tecken, minst en siffra',
						required: true,
						clearIcon: true
					},											
					{
						xtype: 'textareafield',
						label: 'Presentation'
					}
				]
			},
			{
				xtype: 'fieldset',
				title: 'EM-tipset',
				instructions: 'Tippa segrande nation i EM och den spelare som kommer att vinna skytteligan.',
				items: [
					{
						xtype: 'selectfield',
						label: 'Segrande nation',
						name: 'winning-nation',
						required: true,
						value: 'Sverige',
						options: [
							{text: 'Frankrike', value: 'frankrike'},
							{text: 'Italien', value: 'italien'},
							{text: 'Holland', value: 'holland'},													
							{text: 'Spanien', value: 'spanien'},
							{text: 'Sverige', value: 'sverige'},
							{text: 'Tyskland', value: 'tyskland'},												
						]
					},
					{
						xtype: 'textfield',
						label: 'Skytteligavinnare',
						name: 'top-scorer',
						required: true,
						placeHolder: 'Ange enligt formen [namn efternamn, nationalitet]'
					}
				]
			},
			{
				xtype: 'fieldset',
				items: [
					{
						xtype: 'togglefield',
						height: '45px',
						label: 'Jag &ouml;nskar f&aring; push-notifikationer med resultat:',
						name: 'recieve-push-notifications'
					}										
				]
			},
			{
				xtype: 'button',
				text: 'Skapa konto',
				ui: 'confirm',
				handler: function() {
					this.up('formpanel').submit();
				}
			}
		]
	}	
})