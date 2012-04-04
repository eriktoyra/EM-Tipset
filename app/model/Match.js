Ext.define('EM.model.Match', {
	extend: 'Ext.data.Model',
	
	config: {
		fields: [
			'gameId', 
			'firstTeam',
			{
				name: 'firstTeamClass',
				convert: function(value, record) {
					return util.convertFieldValueToLowerCase('firstTeam', record);
				}
			}, 
			'secondTeam',
			{
				name: 'secondTeamClass',
				convert: function(value, record) {
					return util.convertFieldValueToLowerCase('secondTeam', record);
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
			'firstTeamGoals',
			{
				name: 'firstTeamGoals2',
				convert: function(value, record) {
					return util.toFieldValueOrDefault('firstTeamGoals', record);
				}
			},
			'secondTeamGoals',
			{
				name: 'secondTeamGoals2',
				convert: function(value, record) {
					return util.toFieldValueOrDefault('secondTeamGoals', record);
				}
			},			 
			'firstTeamGoalsBet', 
			'secondTeamGoalsBet', 
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
			}
		]
	}
});







