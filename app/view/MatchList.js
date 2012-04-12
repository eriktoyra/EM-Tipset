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
		
		items: [
			{
				xtype: 'titlebar',

				scrollable: {
				    direction: 'horizontal',
				    directionLock: true
				},

				items: [
					{
						xtype: 'button',
						text: 'Omgång 1',
						handler: function() {
							return util.doFilter('Omgång 1');
						}
					},
					{
						xtype: 'button',						
						text: 'Omgång 2',
						handler: function() {
							return util.doFilter('Omgång 2');
						}
					},
					{
						xtype: 'button',
						text: 'Omgång 3',
						handler: function() {
							return util.doFilter('Omgång 3');
						}
					},
					{
						xtype: 'button',						
						text: 'Kvart',
						handler: function() {
							return util.doFilter('Kvart');
						}
					},
					{
						xtype: 'button',						
						text: 'Semi',
						handler: function() {
							return util.doFilter('Semi');
						}
					},
					{
						xtype: 'button',						
						text: 'Final',
						handler: function() {
							return util.doFilter('Final');
						}
					}							

				],
			},
			/*{
				xtype: 'panel',
				html: 'Senast uppdaterad: Idag kl 20:12'
			}*/
		],

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