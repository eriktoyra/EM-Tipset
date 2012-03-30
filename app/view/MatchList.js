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
				'<div class="team-wrapper home-team">{firstTeam} <img src="http://img.uefa.com/imgml/flags/32x32/swe.png" width="16" height="16" /> <div class="goals-scored">{firstTeamGoals}</div></div>',
				'<div class="kick-off-time">XX.XX</div>',
				'<div class="team-wrapper away-team"><div class="goals-scored">{secondTeamGoals}</div> <img src="http://img.uefa.com/imgml/flags/32x32/ger.png" width="16" height="16" /> {secondTeam}</div>',
			'</div>'
			].join('')
		},

	});