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
				xtype: 'container',

				html: [
					'<h1>Standings goes here</h1>',
					'<p>Some lorem ipsum text to fill out the page.</p>',
					'<p>Yet some more text.</p>'
				].join('')
			}			
		]			
	}
})