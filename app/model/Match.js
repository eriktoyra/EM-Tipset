Ext.define('EM.model.Match', {
	extend: 'Ext.data.Model',
	
	init: function() {

	},

	config: {
		fields: [
			{ 
				name: 'gameId', 
				type: 'int'
			}, 
			{
				name: 'firstTeam',
				type: 'string'
			},
			{
				name: 'firstTeamFlag',
				type: 'string',

				convert: function(value, record) {
					return getTeamFlagOrElse(record.get('firstTeam'), '');
				}
			}, 
			{
				name: 'secondTeam',
				type: 'string'
			},
			{
				name: 'secondTeamFlag',
				type: 'string',

				convert: function(value, record) {
					return getTeamFlagOrElse(record.get('secondTeam'), '');
				}
			},
			'kickOff',
			{
				name: 'kickOffHour',
				convert: function(value, record) {
					var timestamp = new Date(util.convertUnixTimeToMilliseconds(record.get('kickOff')));
					
					return Ext.Date.format(timestamp, 'H:i');					
				}
			},
			{ 
				name: 'firstTeamGoals', 
			 	type: 'int', 
			 	defaultValue: 0 
			 },
			{ 
				name: 'secondTeamGoals', 
			 	type: 'int', 
			 	defaultValue: 0 
			 },			 
			{ 
				name: 'firstTeamGoalsBet', 
			 }, 
			{ 
				name: 'secondTeamGoalsBet', 
			 },
			'points',
			{
				name: 'pointsEarned',
				convert: function(value, record) {
					var className = 'no-points-earned';
					var points = record.get('points'); 
					
					if (typeof points == 'undefined') {
						return '';
					}

					if (points > 0) {
						className = 'points-earned';
					}
					
					return '<div class="' + className + '">' + points + '</div>'
				}
			},
			//'name'
		],
		//belongsTo: {model: 'Round', name: 'round', autoLoad: true, },
		associations: {
			type: 'belongsTo',
            model: 'EM.model.Round',
            name: 'round',
            autoLoad: true
		}
	}
});

/**
 * Return the markup needed to display the team flag or else an empty string.
 */
function getTeamFlagOrElse(teamName, defaultValue) {
	if (teamName == "TBA") {
		return defaultValue;
	}

	return '<span class="' + teamName.toLowerCase() + '"></span>';
}







