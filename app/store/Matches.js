Ext.define('EM.store.Matches', {
	extend: 'Ext.data.Store',

	init: function() {
		//console.log(this);
		console.log("init of Matches store");
	},

	config: {
		model: 'EM.model.Match',
		storeId: 'Matches',		
		grouper: {
			/**
			 * Instead of a Unix timestamp from field 'kickOff' we will display the group header as '27 May 2012'.
			 */
			groupFn: function (item) {
				var kickOff = new Date(util.convertUnixTimeToMilliseconds(item.get('kickOff')));
				return kickOff.format('d mmmm yyyy');
			},
			sortProperty: 'kickOff'
		},/*	
		proxy: {
	        type: 'rest',
	        url : 'resources/json/matches.json',
	        reader: {
	            type: 'json',
	            rootProperty: 'games'
	        }
	    },*/
	    autoLoad: true,
	}
});