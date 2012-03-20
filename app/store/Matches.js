Ext.define('EM.store.Matches', {
	extend: 'Ext.data.Store',
	
	config: {
		model: 'EM.model.Match',
		grouper: function (match) {
			return match.get('round'); 
		},
		data: [
		
			{
				firstTeam: {
					name: "Poland",
					short: "pol"
				},
				secondTeam : {
					name: "Greece",
					short: "gre"
				},
				round: "Group Phase 1"
			},
			
			{
				firstTeam: {
					name: "Russia",
					short: "rus"
				},
				secondTeam : {
					name: "Czech Republic",
					short: "cze"
				},
				round: "Group Phase 1"
			},
			
			{
				firstTeam: {
					name: "Netherlands",
					short: "ned"
				},
				secondTeam : {
					name: "Denmark",
					short: "den"
				},
				round: "Group Phase 1"
			},
			
			{
				firstTeam: {
					name: "Germany",
					short: "ger"
				},
				secondTeam : {
					name: "Portugal",
					short: "por"
				},
				round: "Group Phase 1"
			},
			{
				firstTeam: {
					name: "Poland",
					short: "pol"
				},
				secondTeam : {
					name: "Greece",
					short: "gre"
				},
				round: "Group Phase 2"
			},
			
			{
				firstTeam: {
					name: "Russia",
					short: "rus"
				},
				secondTeam : {
					name: "Czech Republic",
					short: "cze"
				},
				round: "Group Phase 2"
			},
			
			{
				firstTeam: {
					name: "Netherlands",
					short: "ned"
				},
				secondTeam : {
					name: "Denmark",
					short: "den"
				},
				round: "Group Phase 2"
			},
			
			{
				firstTeam: {
					name: "Germany",
					short: "ger"
				},
				secondTeam : {
					name: "Portugal",
					short: "por"
				},
				round: "Group Phase 2"
			},

/*			
			{firstTeam:"Greece", secondTeam:"Czech Republic", round:"Group Phase 2"},
			{firstTeam:"Poland", secondTeam:"Russia", round:"Group Phase 2"},
			{firstTeam:"Denmark", secondTeam:"Portugal", round:"Group Phase 2"},
			{firstTeam:"Netherlands", secondTeam:"Germany", round:"Group Phase 2"}*/
		]
	}
});