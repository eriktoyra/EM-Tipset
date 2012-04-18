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
					return matchExt.getTeamFlagOrElse(record.get('firstTeam'), '');
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
					return matchExt.getTeamFlagOrElse(record.get('secondTeam'), '');
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
					return matchExt.getPointsEarnedOrElse(record.get('points'), '');	
				}
			},
		],
		associations: {
			type: 'belongsTo',
            model: 'EM.model.Round',
            name: 'round',
            autoLoad: true
		}
	}
});

/**
 * Match extensions
 */ 
var matchExt = (function() {
	var matchExt = {};

	matchExt.correctResults = function(firstTeamGoals, secondTeamGoals, firstTeamGoalsBet, secondTeamGoalsBet) {

		// http://www.excelforum.com/excel-worksheet-functions/694027-formula-required-to-calculate-points-for-football-results-prediction.html
		if ((firstTeamGoals - secondTeamGoals) == (firstTeamGoalsBet - secondTeamGoalsBet)) {
			// A correct difference between goals for first and second team has been bet
			console.log("user has a correct goal bet");

		}
		else {
			// Determine if the bet is on first team win, a draw or second team win
			var goalDiff = firstTeamGoals - secondTeamGoals;
			var goalDiffBet = firstTeamGoalsBet - secondTeamGoalsBet;
			console.log("goalDiff = " + goalDiff);
			
			if (goalDiffBet < 0) {
				console.log("bet home team as winner");
			}
			else if (goalDiffBet == 0) {
				console.log("bet a draw");
			}
			else if (goalDiffBet > 0) {
				console.log("bet away team as winner");
			}

			//if (firstTeamGoalsBet >= firstTeamGoals && secondTeamGoalsBet )
		}

	}

	matchExt.checkForCorrectResultBet = function() {
		
	}

	matchExt.checkFirstTeamWin = function() {

	}

	matchExt.checkSecondTeamWin = function() {
		
	}

	matchExt.checkDraw = function() {
		
	}


	/**
	 * Return the markup needed to display the team flag or else an empty string.
	 */
	matchExt.getTeamFlagOrElse = function(teamName, defaultValue) {
		if (teamName == "TBD") {
			return defaultValue;
		}

		return '<span class="' + teamName.toLowerCase() + '"></span>';
	}

	/**
	 * Return the markup needed to display points earned for a match or else an empty string.
	 */
	matchExt.getPointsEarnedOrElse = function(points, defaultValue) {
		var className = 'no-points-earned';
		
		if (typeof points == 'undefined') {
			return defaultValue;
		}

		if (points > 0) {
			className = 'points-earned';
		}
		
		return '<div class="' + className + '">' + points + '</div>'
	}	

	return matchExt;
})();

matchExt.correctResults(0, 0, 0, 0);
matchExt.correctResults(0, 3, 0, 1);
matchExt.correctResults(4, 3, 2, 1);
matchExt.correctResults(4, 3, 2, 3);







