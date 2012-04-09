Ext.define('EM.model.Match', {
	extend: 'Ext.data.Model',
	
	init: function() {
		console.log("init of Match model");
		console.log(this);
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
				name: 'firstTeamClass',
				type: 'string',

				convert: function(value, record) {
					return util.convertFieldValueToLowerCase('firstTeam', record);
				}
			}, 
			{
				name: 'secondTeam',
				type: 'string'
			},
			{
				name: 'secondTeamClass',
				type: 'string',

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
		],

		associations: {
			type: 'belongsTo',
            model: 'EM.model.Round',
            name: 'round',
            autoLoad: true
            /*
            			type: 'hasMany', 
			model: 'EM.model.Match', 
			primaryKey: 'gameId',
			name: 'matches',
			autoLoad: true,
			associationKey: 'games'
            */
		}

	}
});







