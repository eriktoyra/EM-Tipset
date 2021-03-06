Ext.define('EM.view.MatchList', {
	extend: 'Ext.List',
	xtype: 'matchlist',

	requires: [
		'Ext.TitleBar',
		'EM.store.Matches',
		//'Ext.plugin.PullRefresh'
	],

	config: {
		id: 'match-list',		
		store: 'Matches',
		grouped: true,
		scrollable: false,
		showAnimation: Ext.create('Ext.fx.animation.Slide', {
			direction: 'right'
		}),		
		/*plugins: [
			{
				xclass: 'Ext.plugin.PullRefresh',
				pullRefreshText: 'Dra nedåt för att uppdatera matchresultat.'
			}
		],*/
		itemTpl: [

			'<div class="match-meta-data">',			
				'<div class="team-wrapper home-team">{firstTeam} <div class="flag">{firstTeamFlag}</div> <span class="goals-scored">{result.homeTeamGoals}</span></div>',
				'<div class="kick-off-time">{kickOffHour}</div>',
				'<div class="team-wrapper away-team"><span class="goals-scored">{result.awayTeamGoals}</span> <div class="flag">{secondTeamFlag}</div> {secondTeam}</div>',
				'<div class="bet-meta-data {bettingOutcome}">',
					'<img class="user-icon" src="resources/images/user-22x26.png" />',
					'<div class="home-team goals-bet">{prediction.homeTeamGoals}</div>',
					'<div class="away-team goals-bet">{prediction.awayTeamGoals}</div>',
					'{pointsEarned}',	
				'</div>',
			'</div>',

			].join('')
		},

	});