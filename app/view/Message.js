Ext.define('EM.view.Message', {
	extend: 'Ext.Container',
	xtype: 'message',
	
	config: {
		//id: 'message',
		cls: 'message',		
		hideAnimation: 'fadeOut',
		tpl: [
			'<div>{message}</div>'
		],		
		data: {},
		listeners: {
			tap: {
                element: 'element',
                fn: function() {
                	this.hide();
                }
            },
		}		
	},
});