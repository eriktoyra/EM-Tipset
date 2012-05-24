Ext.define('EM.view.Top4', {
	extend: 'Ext.Container',
	xtype: 'top4',
	
	config: {
		id: 'top-4',
		showAnimation: Ext.create('Ext.fx.animation.Slide', {
			direction: 'left'
		}),
		hidden: true,
		
		items: [
			{
				xtype: 'message',
				id: 'top-4-message',
				data: {
					message: 'Du får 1 poäng för varje mål som dina spelare gör. Du får 0,5 poäng extra om din spelare blir turneringens skyttekung.',
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