Ext.define('EM.model.Round', {
	extend: 'Ext.data.Model',
	
	init: function() {
		
	},

	config: {
		fields: [
			'roundId',
			'name', 
			'lockedDate',
			{
				name: 'isLocked',
				type: 'boolean',
				convert: function(value, record) {
					return record.get('lockedDate') > Date.now();
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
		proxy: {
			type: 'ajax',
			url: 'http://emtipset.dev.stendahls.se/api/rounds',
			method: 'GET',
			
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Basic YXBpdGVzdDphcGl0ZXN0'
			},
			reader: {
				type: 'json',
			}
		},
	},
});