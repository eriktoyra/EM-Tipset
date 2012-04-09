Ext.define('EM.view.MatchList', {
	extend: 'Ext.List',
	xtype: 'matchlist',

	requires: [
		'Ext.TitleBar',
		'EM.store.Rounds'
	],

	config: {
		id: 'match-list',		
		store: 'Rounds',
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
							var sto = Ext.getStore('Rounds');
							sto.clearFilter();
							sto.filter('name', 'Omgång 1');
							console.log(sto);
						}
					},
					{
						xtype: 'button',						
						text: 'Omgång 2',
						handler: function() {
							var sto = Ext.getStore('Rounds');
							sto.clearFilter();
							sto.filter('name', 'Omgång 2');

						}
					},
					{
						xtype: 'button',
						text: 'Omgång 3',
						handler: function() {
							var sto = Ext.getStore('Rounds');
							sto.clearFilter();
							sto.filter('name', 'Omgång 3');

						}
					},
					{
						xtype: 'button',						
						text: 'Kvart',
						handler: function() {
							var sto = Ext.getStore('Rounds');
							sto.clearFilter();
							sto.filter('name', 'Kvart');

						}
					},
					{
						xtype: 'button',						
						text: 'Semi',
						handler: function() {
							var sto = Ext.getStore('Rounds');
							sto.clearFilter();
							sto.filter('name', 'Semi');

						}
					},
					{
						xtype: 'button',						
						text: 'Final',
						handler: function() {
							var sto = Ext.getStore('Rounds');
							sto.clearFilter();
							sto.filter('name', 'Final');

						}
					}							

				],
			},
			{
				xtype: 'panel',
				html: 'Senast uppdaterad: Idag kl 20:12'
			}
		],

		itemTpl: [

			'<div class="match-meta-data">',
			'<tpl for="matches">',			
				'<div class="team-wrapper home-team">{firstTeam} <div class="flag {firstTeamClass}"><span></span></div> <span class="goals-scored">{firstTeamGoals}</span></div>',
				'<div class="kick-off-time">{kickOffHour}</div>',
				'<div class="team-wrapper away-team"><span class="goals-scored">{secondTeamGoals}</span> <div class="flag {secondTeamClass}"><span></span></div> {secondTeam}</div>',
				'<div class="bet-meta-data">',
					'<img class="user-icon" src="resources/images/user-22x26.png" />',
					'<div class="home-team goals-bet">{firstTeamGoalsBet}</div>',
					'<div class="away-team goals-bet">{secondTeamGoalsBet}</div>',
					'{pointsEarned}',	
				'</div>',
			'</tpl>',
			'</div>',

			].join('')
		},

	});