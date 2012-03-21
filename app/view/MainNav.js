Ext.define('EM.view.MainNav', {
	extend: 'Ext.tab.Panel',
	xtype: 'mainnav',

	config: {
		ui: 'light',
		tabBar: {
			layout: { 
				pack: 'center',
				animation: {
					type: 'fade'
				}				
			}
		},
		activeTab: 1,
		scroll: 'vertical',

		items: [
		{
			title: 'Resultat',
			xtype: 'matchlist',			
		},
		{
			title: 'Tabell',
			html: '<h1>Tabell med statistik för delagares poäng och position.</h1>'			
		}
		]		
	},
})