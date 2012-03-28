Ext.define('EM.view.ResultsPage', {
	extend: 'Ext.Container',
	xtype: 'resultspage',
	
	config: {
		id: 'results-page',
		
		items: [
			{
				xtype: 'mystats'
			},
			{
				xtype: 'container',

				html: [
				'Resultatlista m.m.<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>2<br/><br/>'
				]
			}			
		]		
	}
})