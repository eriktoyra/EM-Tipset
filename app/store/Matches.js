/**
 * Creates the initial store filter that filters out all matches from the first round ("Omgång 1").
 */
var initialFilter = new Ext.util.Filter({
    filterFn: function(item) {
        return item.getRound().get('name') == 'Omgång 1';
    }
});

/**
 * Matches store
 */
Ext.define('EM.store.Matches', {
	extend: 'Ext.data.Store',

	config: {
		model: 'EM.model.Match',
		storeId: 'Matches',
		filters: initialFilter,
		grouper: {
			/**
			 * Instead of a Unix timestamp from field 'kickOff' we will display the group header as '27 May 2012'.
			 */
			groupFn: function (item) {
				var kickOff = new Date(util.convertUnixTimeToMilliseconds(item.get('kickOff')));
				return kickOff.format('d mmmm yyyy');
			},
			sortProperty: 'kickOff'
		},				
	}
});