Ext.define('EM.view.Results', {
	extend: 'Ext.Panel',
	xtype: 'resultspanel',
	
	requires: [
		'Ext.carousel.Carousel'
	],
	
	config: {
		title: 'Results',
		cls: 'cards',

		layout: {
			type: 'vbox',
		},
		defaults: {
			flex: 1
		},
		items: [{
			xtype: 'carousel',
			
			items: [{
				cls: 'card',
				html: '<h1>First carousel</h1>'
			},
			{
				cls: 'card',
				html: '<h1>Second carousel</h1>'
			},
			{
				cls: 'card',
				html: '<h1>Third carousel</h1>'
			}			]
		}]
	}
})