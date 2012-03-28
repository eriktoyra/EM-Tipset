Ext.define('EM.view.StandingsPage', {
	extend: 'Ext.Container',
	xtype: 'standingspage',
	
	config: {
		id: 'standings-page',
		
		items: [
			{
				xtype: 'container',

				html: [
					'Standings goes here'
				]
			}			
		]		
	}
})