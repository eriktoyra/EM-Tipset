Ext.define('EM.view.RoundSelector', {
	extend: 'Ext.Toolbar',
	xtype: 'roundselector',

	requires: ['Ext.SegmentedButton'],
	
	config: {
		id: 'round-selector',	
		//scrollable: true,
		//inline: true,
		scrollable: {
		    direction: 'horizontal',
		    directionLock: true
		}
	}
});