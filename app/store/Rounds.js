Ext.define('EM.store.Rounds', {
	extend: 'Ext.data.Store',

	config: {
		model: 'EM.model.Round',
		storeId: 'Rounds',
		/*filters: [{
			property: 'name',
			value: 'Omgång 1'
		}],*/
		grouper: {
			groupFn: function (item) {
				console.log(item);
				return;
				//var kickOff = new Date(util.convertUnixTimeToMilliseconds(item.get('kickOff')));
				//return kickOff.format('d mmmm yyyy');
			},
			//sortProperty: 'kickOff'
		},		
		proxy: {
	        type: 'rest',
	        url : 'resources/json/matches.json',
	        reader: {
	            type: 'json',
	        }
	    },
	    autoLoad: true,
	}
});