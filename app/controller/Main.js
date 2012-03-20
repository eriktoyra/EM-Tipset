Ext.define('EM.controller.Main', {
    extend: 'Ext.app.Controller',
    
		config: {
			views: ['SlideInMenu', 'Results']
		},
		
		init: function() {
			console.log('init in EM.controller.Main');
			this.control({
				
			});
		}
});