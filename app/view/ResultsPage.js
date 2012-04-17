Ext.define('EM.view.ResultsPage', {
	extend: 'Ext.Container',
	xtype: 'resultspage',

	config: {
		id: 'results-page',
		showAnimation: Ext.create('Ext.fx.animation.Slide', {
			direction: 'right'
		}),
		
		items: [		
			{
				xtype: 'roundselector',
			},
			{
				xtype: 'lastupdated',
			},
			{
				xtype: 'matchlist',
			}			
		]
	}
})