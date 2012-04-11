/**
 * Rounds store
 */
Ext.define('EM.store.Rounds', {
	extend: 'Ext.data.Store',

	config: {
		model: 'EM.model.Round',
		storeId: 'Rounds',
	}
});