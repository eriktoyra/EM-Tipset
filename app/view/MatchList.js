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
				'<div class="team-wrapper home-team">{firstTeam} <img src="http://img.uefa.com/imgml/flags/32x32/{firstTeamClass}.png" width="16" height="16" /> <span class="goals-scored">{firstTeamGoals2}</span></div>',
				'<div class="kick-off-time">{kickOffHour}</div>',
				'<div class="team-wrapper away-team"><span class="goals-scored">{secondTeamGoals2}</span> <img src="http://img.uefa.com/imgml/flags/32x32/{secondTeamClass}.png" width="16" height="16" /> {secondTeam}</div>',
			'</div>'
			].join('')
		},

	});