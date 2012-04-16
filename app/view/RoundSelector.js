Ext.define('EM.view.RoundSelector', {
	extend: 'Ext.Toolbar',
	xtype: 'roundselector',

	requires: ['Ext.SegmentedButton'],
	
	config: {
		id: 'round-selector',	

		scrollable: {
		    direction: 'horizontal',
		    directionLock: true
		}
	}
});