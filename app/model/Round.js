Ext.define('EM.model.Round', {
	extend: 'Ext.data.Model',
	
	init: function() {
		
	},

	config: {
		fields: [
			'roundId',
			'name', 
			{
				name: 'lockedDate',
				convert: function(value, record) {
					var lockedDate = value.replace(/\/|Date\(|\+0200\)/g, '');
					lockedDate = new Date(parseInt(lockedDate));

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