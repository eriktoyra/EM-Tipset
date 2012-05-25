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
					"<div id=\"leage-header\">Ligaranking: Stendahls</div>",
				].join('')
			},
			{
				xtype: 'lastupdated',
				id: 'leages-last-updated',
				data: {
					lastUpdated: '18 Maj 2012, 22:17' // Hardcoded until leages are implemented
				}
			},			
			{
				xtype: 'message',
				id: 'leages-message',
				data: {
					message: 'Ligorna visas ej innan turneringn har startat. Återkom till den här sidan efter den 8 juni.',
				}
			}			
		]			
	}
})