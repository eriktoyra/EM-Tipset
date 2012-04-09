Ext.define('EM.model.Round', {
	extend: 'Ext.data.Model',
	
	init: function() {
		//console.log("getAssociatedData()");
		//console.log(this.getAssociatedData());
		//this.setData(this.getAssociatedData());
	},

	config: {
		storeId: 'Rounds',

		fields: [
			'name', 
			'lockedDate',
		],
		associations: { 
			type: 'hasMany', 
			model: 'EM.model.Match', 
			primaryKey: 'gameId',
			name: 'matches',
			autoLoad: true,
			associationKey: 'games'
		}	
	},

	
});