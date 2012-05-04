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
					return parseInt(value);
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

					if (typeof result == 'undefined') {
						result = {
							homeTeamScore: 0,
							awayTeamScore: 0
						};
					}

					return result;
				}
			},
			{
				name: 'prediction',
				convert: function(value, record) {
					var prediction = value;

					if (typeof prediction  == 'undefined') {
						prediction = {
							homeTeamScore: '',
							awayTeamScore: '',
						}
					}

					return prediction;
				}
			},
			'score',
			{
				name: 'pointsEarned',
				convert: function(value, record) {
					return matchExt.getPointsEarnedOrElse(record.get('score'), '');	
				}
			},
			{
				name: 'bettingOutcome',
				type: 'string',
				convert: function(value, record) {
					return matchExt.correctBettedResults(
									record.get('score'), 
									record.get('result'), 
									record.get('prediction')
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
	matchExt.correctBettedResults = function(points, result, prediction) {
		if (typeof points == 'undefined' || points == 0) {
			// No points given for this match, so no need to continue.
			return '';
		}

		if (this.checkForCorrectResultBet(result.homeTeamGoals, result.awayTeamGoals, prediction.homeTeamGoals, prediction.awayTeamGoals)) {
			return 'correct-result';
		}

		if (this.checkFirstTeamWin(result.homeTeamGoals, result.awayTeamGoals, prediction.homeTeamGoals, prediction.awayTeamGoals)) {
			return 'home-team-win';
		}

		if (this.checkSecondTeamWin(result.homeTeamGoals, result.awayTeamGoals, prediction.homeTeamGoals, prediction.awayTeamGoals)) {
			return 'away-team-win';
		}

		if (this.checkDraw(result.homeTeamGoals, result.awayTeamGoals, prediction.homeTeamGoals, prediction.awayTeamGoals)) {
			return 'drawed';
		}
	}

	/**
	 * Returns true if the goal difference between first and second team is correct.
	 */
	matchExt.checkForCorrectGoalDifference = function(homeTeamGoals, awayTeamGoals, homeTeamGoals, awayTeamGoals) {
		return (homeTeamGoals - awayTeamGoals) == (homeTeamGoals - awayTeamGoals);
	}

	/**
	 * Returns true if the betted result exactly matches the actual result. 
	 */
	matchExt.checkForCorrectResultBet = function(homeTeamGoals, awayTeamGoals, homeTeamGoals, awayTeamGoals) {
		return (homeTeamGoals == homeTeamGoals) && (awayTeamGoals == awayTeamGoals);
	}

	/**
	 * Returns true if the betted result had more first team goals than second team goals and the actual result had the same.
	 */
	matchExt.checkFirstTeamWin = function(homeTeamGoals, awayTeamGoals, homeTeamGoals, awayTeamGoals) {
		return (homeTeamGoals > awayTeamGoals) && (homeTeamGoals > awayTeamGoals);
	}

	/**
	 * Returns true if the betted result had more second team goals than first team goals and the actual result had the same.
	 */
	matchExt.checkSecondTeamWin = function(homeTeamGoals, awayTeamGoals, homeTeamGoals, awayTeamGoals) {
		return (homeTeamGoals < awayTeamGoals) && (homeTeamGoals < awayTeamGoals);	
	}

	/**
	 * Returns true if the betted result were a drawed result and the actual result also was a drawed result.
	 */
	matchExt.checkDraw = function(homeTeamGoals, awayTeamGoals, homeTeamGoals, awayTeamGoals) {
		return (homeTeamGoals == awayTeamGoals) && (homeTeamGoals == awayTeamGoals);	
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







