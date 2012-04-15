Ext.define('EM.view.MatchList', {
	extend: 'Ext.List',
	xtype: 'matchlist',

	requires: [
		'Ext.TitleBar',
		'EM.store.Rounds',
		'EM.store.Matches'
	],

	config: {
		id: 'match-list',		
		store: 'Matches',
		grouped: true,
		scrollable: false,
		itemTpl: [

			'<div class="match-meta-data">',			
				'<div class="team-wrapper home-team">{firstTeam} <div class="flag">{firstTeamFlag}</div> <span class="goals-scored">{firstTeamGoals}</span></div>',
				'<div class="kick-off-time">{kickOffHour}</div>',
				'<div class="team-wrapper away-team"><span class="goals-scored">{secondTeamGoals}</span> <div class="flag">{secondTeamFlag}</div> {secondTeam}</div>',
				'<div class="bet-meta-data">',
					'<img class="user-icon" src="resources/images/user-22x26.png" />',
					'<div class="home-team goals-bet">{firstTeamGoalsBet}</div>',
					'<div class="away-team goals-bet">{secondTeamGoalsBet}</div>',
					'{pointsEarned}',	
				'</div>',
			'</div>',

			].join('')
		},

	});