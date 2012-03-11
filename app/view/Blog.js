Ext.define('EM.view.Blog', {
	extend: 'Ext.navigation.View',
	xtype: 'blog',
	
	requires: [
		'Ext.data.proxy.JsonP',
		'Ext.data.TreeStore',
		'Ext.dataview.NestedList'
	],
			
	config: {
		title: 'Blogg',
		iconCls: 'star',
		badgeText: '2',
		
		items: {
			xtype: 'list',
			itemTpl: '{title}',
			title: 'Stendahls Case Blogg',
			
			store: {
				autoLoad: true,
				fields: [
					'title', 'link', 'author', 'content'
					],

					root: {
						leaf: false
					},

					proxy: {
						type: 'jsonp',
						url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://www.stendahls.se/Case/RSS/',
						reader: {
							type: 'json',
							rootProperty: 'responseData.feed.entries'
						}
					}								
			}	
		}						
	}	
})