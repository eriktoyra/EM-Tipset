Ext.define('EM.view.MessageAtTop', {
	extend: 'Ext.Panel',
	xtype: 'messageattop',
	
	config: {
		id: 'message-at-top',
		cls: 'message top',		
		top: 5,
		left: 0,
		hideAnimation: 'slideOut',
		tpl: [
			'<div>{errorMessage}</div>'
		],		
		data: {},		
	},
});