Ext.define('EM.model.Match', {
	extend: 'Ext.data.Model',
	
	config: {
		fields: [
			'gameId', 
			'firstTeam', 
			'secondTeam',
			'kickOff',
			'firstTeamGoals', 
			'secondTeamGoals', 
			'firstTeamGoalsBet', 
			'secondTeamGoalsBet', 
			'points'
		]
	}
});
