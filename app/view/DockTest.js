Ext.define('EM.view.DockTest', {
		extend: 'Ext.Panel',
    fullscreen: true,
    layout: 'vbox',
		xtype: 'docktest',

    items: [
        {
            docked: 'left',
            xtype: 'panel',
            width: 100,
            html: 'This is docked to the left',
						cls: 'left-panel'
        },
        {
            xtype: 'panel',
            html: 'message list',
            flex: 1,
						cls: 'top-panel'
        },
        {
            xtype: 'panel',
            html: 'message preview',
            flex: 2,
						cls: 'bottom-panel'
        }
    ]
});