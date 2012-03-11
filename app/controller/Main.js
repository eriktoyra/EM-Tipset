Ext.define('EM.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            blog: 'blog'
        },
        control: {
            'blog list': {
							itemtap: 'showBlogPost'
						}
        }
    },

		showBlogPost: function(list, index, element, record) {
			this.getBlog().push({
				xtype: 'panel',
				title: record.get('title'),
				html: record.get('content'),
				scrollable: true,
				styleHtmlContent: true
			})
		},
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});