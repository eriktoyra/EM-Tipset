Ext.define('EM.view.RoundSelector', {
	extend: 'Ext.List',
	xtype: 'roundselector',

	requires: ['EM.store.Rounds'],

	config: {
		id: 'round-selector',
		store: 'Rounds',
		scrollable: true,
		inline: true,

		itemTpl: [
			'<div>{name}</div>'
		].join(''),
	}
});