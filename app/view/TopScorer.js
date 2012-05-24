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
				xtype: 'message',
				id: 'top-scorer-message',
				data: {
					message: 'Du får 1,3 poäng för varje rätt tippat semifinallag. Du får ytterligare 2,3 poäng för varje lag som du placerat helt rätt.	',
				}
			},		
			{
				xtype: 'container',
				html: [
					'',
				].join('')
			}			
		]			
	}
})