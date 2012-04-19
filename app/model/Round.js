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
			type: 'rest',
			url : 'http://172.20.60.179/~eriktoyra/EM/resources/json/matches.json',
			//TODO: Find an alternative solution where I can send a correct JSONP header back together with the JSON document. http://dl.dropbox.com/u/10768459/json/matches.json
			reader: {
				type: 'json',
			}
		},
	},
});