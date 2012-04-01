Ext.define('EM.store.Matches', {
	extend: 'Ext.data.Store',
	
	config: {
		model: 'EM.model.Match',
		sorters: [
			{
				property: 'kickOff',
				direction: 'DESC'				
			}
			],		
		grouper: {
			groupFn: function (item) {
				var kickOff = new Date(util.convertUnixTimeToMilliseconds(item.get('kickOff')));
				return Ext.Date.format(kickOff, 'j F Y');
			}
		},
		data: [
		{
			"gameId": 1,
			"firstTeam": "Pol",
			"secondTeam": "Gre",
			"kickOff": 1339178400,
			"firstTeamGoals": 2,
			"secondTeamGoals": 3,
			"firstTeamGoalsBet": 1,
			"secondTeamGoalsBet": 4,
			"points": 2
		},
		{
			"gameId": 2,
			"firstTeam": "Rus",
			"secondTeam": "Cze",
			"kickOff": 1339188300,
			"firstTeamGoals": 1,
			"secondTeamGoals": 0,
			"firstTeamGoalsBet": 2,
			"secondTeamGoalsBet": 2,
			"points": 0
		},{
			"gameId": 3,
			"firstTeam": "Ned",
			"secondTeam": "Den",
			"kickOff": 1339264800,
			"firstTeamGoals": 1,
			"secondTeamGoals": 0
		},
		{
			"gameId": 4,
			"firstTeam": "Ger",
			"secondTeam": "Por",
			"kickOff": 1339274700
		},
		{
			"gameId": 5,
			"firstTeam": "Spa",
			"secondTeam": "Ita",
			"kickOff": 1339351200
		},  
		{
			"gameId": 6,
			"firstTeam": "Irl",
			"secondTeam": "Cro",
			"kickOff": 1339361100
		},
		{
			"gameId": 7,
			"firstTeam": "Fra",
			"secondTeam": "Eng",
			"kickOff": 1339437600
		},
		{
			"gameId": 8,
			"firstTeam": "Ukr",
			"secondTeam": "Swe",
			"kickOff": 1339447500
		}
		]
	}
});