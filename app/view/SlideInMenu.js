Ext.define('EM.view.SlideInMenu', {
	extend: 'Ext.Panel',
	xtype: 'slideinmenu',

	config: {
		docked: 'left',
		xtype: 'panel',
		width: 100,
		html: 'This is docked to the left',
		cls: 'left-panel'		
	}
})