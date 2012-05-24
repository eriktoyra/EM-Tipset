Ext.define('EM.view.LastUpdated', {
	extend: 'Ext.Container',
	xtype: 'lastupdated',

	config: {
		data: {},
		tpl: '<img id="clock" src="resources/images/clock.png" />Senast uppdaterad: {lastUpdated}',
		cls: 'last-updated'
	}
});