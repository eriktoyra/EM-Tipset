Ext.define('EM.view.Top4AndTopScorer', {
	extend: 'Ext.Container',
	xtype: 'top4andtopscorer',
	
	config: {
		id: 'top-4-and-top-scorer',
		showAnimation: Ext.create('Ext.fx.animation.Slide', {
			direction: 'left'
		}),
		hidden: true,		
		
		items: [
			{
				xtype: 'container',

				html: [
					'<h1>Topp 4 & skyttekung</h1>',
				].join('')
			}			
		]			
	}
})