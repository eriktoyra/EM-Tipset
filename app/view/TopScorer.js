Ext.define('EM.view.TopScorer', {
	extend: 'Ext.Container',
	xtype: 'topscorer',
	
	config: {
		id: 'top-scorer',
		showAnimation: Ext.create('Ext.fx.animation.Slide', {
			direction: 'left'
		}),
		hidden: true,
		
		items: [
			{
				xtype: 'container',

				html: [
					'<h1>Skyttekung</h1>',
				].join('')
			}			
		]			
	}
})