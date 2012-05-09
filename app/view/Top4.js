Ext.define('EM.view.Top4', {
	extend: 'Ext.Container',
	xtype: 'top4',
	
	config: {
		id: 'top-4',
		showAnimation: Ext.create('Ext.fx.animation.Slide', {
			direction: 'left'
		}),
		hidden: true,
		
		items: [
			{
				xtype: 'container',

				html: [
					'<h1>Topp 4</h1>',
				].join('')
			}			
		]			
	}
})