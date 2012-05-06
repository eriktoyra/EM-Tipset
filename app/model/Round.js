Ext.define('EM.model.Round', {
	extend: 'Ext.data.Model',
	
	init: function() {
		
	},

	config: {
		fields: [
			'roundId',
			'name',
			{
				name: 'startDate',
				convert: function(value, record) {
					var startDate = new Date(parseInt(value));

					return startDate < Date.now();
				}
			},			 
			{
				name: 'lockedDate',
				convert: function(value, record) {
					var lockedDate = new Date(parseInt(value));

					return lockedDate < Date.now();
				}
			},
			{
				name: 'isLocked',
				type: 'boolean',
				convert: function(value, record) {
					var lockedDate = new Date(record.get('lockedDate'));

					return lockedDate < Date.now();
				}
			},			
			'matches',
		],
		associations: [{ 
			type: 'hasMany', 
			model: 'EM.model.Match', 
			name: 'matches',
			autoLoad: true,
		}],
	},
});