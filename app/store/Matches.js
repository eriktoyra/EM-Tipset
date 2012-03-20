Ext.define('EM.store.Matches', {
	extend: 'Ext.data.Store',
	
	config: {
		model: 'EM.model.Match',
		grouper: function (match) {
			return match.get('round'); 
		},
		data: [
			{firstTeam:"Poland", secondTeam:"Greece", round:"Group Phase 1"},
			{firstTeam:"Russia", secondTeam:"Czech Republic", round:"Group Phase 1"},
			{firstTeam:"Netherlands", secondTeam:"Denmark", round:"Group Phase 1"},
			{firstTeam:"Germany", secondTeam:"Portugal", round:"Group Phase 1"},
			
			{firstTeam:"Greece", secondTeam:"Czech Republic", round:"Group Phase 2"},
			{firstTeam:"Poland", secondTeam:"Russia", round:"Group Phase 2"},
			{firstTeam:"Denmark", secondTeam:"Portugal", round:"Group Phase 2"},
			{firstTeam:"Netherlands", secondTeam:"Germany", round:"Group Phase 2"}
		]
	}
});