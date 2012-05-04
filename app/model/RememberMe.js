Ext.define('EM.model.RememberMe', {
	extend: 'Ext.data.Model',
	
	init: function() {
		
	},

	config: {
		fields: [
			'userId',
			'name', 
			'auth'
		],
		validations: [
			{
				field: 'userId',
				type: 'presence',
			},
			{
				field: 'name',
				type: 'presence'
			},
			{
				field: 'auth',
				type: 'presence'
			}
		]
	},
});