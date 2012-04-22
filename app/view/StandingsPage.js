Ext.define('EM.view.StandingsPage', {
	extend: 'Ext.Container',
	xtype: 'standingspage',
	
	config: {
		id: 'standings-page',
		showAnimation: Ext.create('Ext.fx.animation.Slide', {
			direction: 'left'
		}),		
		
		items: [
			{
				xtype: 'mystats'
			},		
			{
				xtype: 'container',

				html: [
					'<h1>Tabeller, så småningom.</h1>',
				].join('')
			}			
		]			
	}
})