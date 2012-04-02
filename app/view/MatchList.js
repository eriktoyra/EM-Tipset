Ext.define('EM.view.MatchList', {
	extend: 'Ext.List',
	xtype: 'matchlist',

	requires: ['EM.store.Matches'],

	config: {
		id: 'match-list',		
		store: 'Matches',
		grouped: true,
		scrollable: false,

		itemTpl: [
			'<div class="match-meta-data">',
				'<div class="team-wrapper home-team">{firstTeam} <div class="flag {firstTeamClass}"></div> <span class="goals-scored">{firstTeamGoals2}</span></div>',
				'<div class="kick-off-time">{kickOffHour}</div>',
				'<div class="team-wrapper away-team"><span class="goals-scored">{secondTeamGoals2}</span> <div class="flag {secondTeamClass}"></div> {secondTeam}</div>',
			'</div>'
			].join('')
		},

	});