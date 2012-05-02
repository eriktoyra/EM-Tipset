Ext.define('EM.model.Match', {
	extend: 'Ext.data.Model',
	
	init: function() {

	},

	config: {
		fields: [
			{ 
				name: 'matchId', 
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
			{
				name: 'kickOff',
				convert: function(value, record) {
					var kickOff = value.replace(/\/|Date\(|\+0200\)/g, '');

					return kickOff;
				}				
			},
			{
				name: 'kickOffHour',
				convert: function(value, record) {
					var timestamp = parseInt(record.get('kickOff'));
					timestamp = new Date(timestamp);
	
					return Ext.Date.format(timestamp, 'H:i');
				}			
			},
			{
				name: 'result',
				convert: function(value, record) {
					var result = value;

					if (result.homeTeamScore == null) {
						result.homeTeamScore = 0;
					}
					if (result.awayTeamScore == null) {
						result.awayTeamScore = 0;
					}

					return result;
				}
			},
			{
				name: 'bet',
				convert: function(value, record) {
					var bet = value;

					if (bet == null) {
						bet = {
							homeTeamScore: '',
							awayTeamScore: '',
						}
					}
					return bet;
				}
			},
			'matchPoints',
			{
				name: 'pointsEarned',
				convert: function(value, record) {
					return matchExt.getPointsEarnedOrElse(record.get('matchPoints'), '');	
				}
			},
			{
				name: 'bettingOutcome',
				type: 'string',
				convert: function(value, record) {
					return matchExt.correctBettedResults(
									record.get('matchPoints'), 
									record.get('firstTeamGoals'), 
									record.get('secondTeamGoals'), 
									record.get('firstTeamGoalsBet'), 
									record.get('secondTeamGoalsBet')
								);
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

	/**
	 * Verifies the betted result agains the actual result.
	 */
	matchExt.correctBettedResults = function(points, firstTeamGoals, secondTeamGoals, firstTeamGoalsBet, secondTeamGoalsBet) {
		if (typeof points == 'undefined' || points == 0) {
			// No points given for this match, so no need to continue.
			return '';
		}

		if (this.checkForCorrectResultBet(firstTeamGoals, secondTeamGoals, firstTeamGoalsBet, secondTeamGoalsBet)) {
			return 'correct-result';
		}

		if (this.checkFirstTeamWin(firstTeamGoals, secondTeamGoals, firstTeamGoalsBet, secondTeamGoalsBet)) {
			return 'first-team-win';
		}

		if (this.checkSecondTeamWin(firstTeamGoals, secondTeamGoals, firstTeamGoalsBet, secondTeamGoalsBet)) {
			return 'second-team-win';
		}

		if (this.checkDraw(firstTeamGoals, secondTeamGoals, firstTeamGoalsBet, secondTeamGoalsBet)) {
			return 'drawed';
		}
	}

	/**
	 * Returns true if the goal difference between first and second team is correct.
	 */
	matchExt.checkForCorrectGoalDifference = function(firstTeamGoals, secondTeamGoals, firstTeamGoalsBet, secondTeamGoalsBet) {
		return (firstTeamGoals - secondTeamGoals) == (firstTeamGoalsBet - secondTeamGoalsBet);
	}

	/**
	 * Returns true if the betted result exactly matches the actual result. 
	 */
	matchExt.checkForCorrectResultBet = function(firstTeamGoals, secondTeamGoals, firstTeamGoalsBet, secondTeamGoalsBet) {
		return (firstTeamGoalsBet == firstTeamGoals) && (secondTeamGoalsBet == secondTeamGoals);
	}

	/**
	 * Returns true if the betted result had more first team goals than second team goals and the actual result had the same.
	 */
	matchExt.checkFirstTeamWin = function(firstTeamGoals, secondTeamGoals, firstTeamGoalsBet, secondTeamGoalsBet) {
		//console.log(firstTeamGoals + ' == ' + secondTeamGoals + ' && ' + firstTeamGoalsBet + ' == ' + secondTeamGoalsBet);
		return (firstTeamGoals > secondTeamGoals) && (firstTeamGoalsBet > secondTeamGoalsBet);
	}

	/**
	 * Returns true if the betted result had more second team goals than first team goals and the actual result had the same.
	 */
	matchExt.checkSecondTeamWin = function(firstTeamGoals, secondTeamGoals, firstTeamGoalsBet, secondTeamGoalsBet) {
		return (firstTeamGoals < secondTeamGoals) && (firstTeamGoalsBet < secondTeamGoalsBet);	
	}

	/**
	 * Returns true if the betted result were a drawed result and the actual result also was a drawed result.
	 */
	matchExt.checkDraw = function(firstTeamGoals, secondTeamGoals, firstTeamGoalsBet, secondTeamGoalsBet) {
		return (firstTeamGoals == secondTeamGoals) && (firstTeamGoalsBet == secondTeamGoalsBet);	
	}

	/**
	 * Return the markup needed to display the team flag or else an empty string.
	 */
	matchExt.getTeamFlagOrElse = function(teamName, defaultValue) {
		if (teamName == "tbd" || teamName == "tbd2") {
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
		
		return '<div class="' + className + '">' + points + 'p</div>'
	}	

	return matchExt;
})();







