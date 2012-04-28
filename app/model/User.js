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
		validations: [
			/*
			{
				field: 'userId',
				type: 'presence',
			},
			{
				field: 'name',
				type: 'presence'
			},
			*/			
			{
				field: 'email',
				type: 'email',
				message: 'Epostadressen är inte giltig.'
			},
			{
				field: 'password',
				type: 'presence',
				message: 'Ett lösenord måste anges.'
			},
		]
	},
});