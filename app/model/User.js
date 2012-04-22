Ext.define('EM.model.User', {
	extend: 'Ext.data.Model',
	
	init: function() {
		
	},

	config: {
		fields: [
			'userId',
			'name', 
			'email',
			'password'
		],
	},
});