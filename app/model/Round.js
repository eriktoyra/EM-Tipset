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

					return startDate;
				}
			},			 
			{
				name: 'lockedDate',
				convert: function(value, record) {
					var lockedDate = new Date(parseInt(value));

					return lockedDate;
				}
			},
			{
				name: 'isLocked',
				type: 'boolean',
				convert: function(value, record) {
					var startDate = record.get('startDate'),
						lockedDate = record.get('lockedDate'),
						now = new Date();

					if (startDate > now || lockedDate < now) {
						return true;
					}
					else if (startDate < now && lockedDate > now) {
						return false;
					}
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