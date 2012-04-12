Ext.define('EM.model.Round', {
	extend: 'Ext.data.Model',
	
	init: function() {
		
	},

	config: {
		fields: [
			'id',
			'name', 
			'lockedDate',
			'matches'
		],
		associations: [{ 
			type: 'hasMany', 
			model: 'EM.model.Match', 
			name: 'matches',
			autoLoad: true,
		}],
		proxy: {
	        type: 'rest',
	        url : 'resources/json/matches.json',
	        reader: {
	            type: 'json',
	        }
	    },
	},
});