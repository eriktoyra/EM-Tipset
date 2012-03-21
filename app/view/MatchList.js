Ext.define('EM.view.MatchList', {
	extend: 'Ext.List',
	xtype: 'matchlist',

	config: {
		cls: 'matchList',
		id: 'matchList', 
		left: 0,
		top: 0, 
		width: "100%",
		//height: "100%",		
		grouped:true,
		itemTpl:  
		['<img src="http://img.uefa.com/imgml/flags/32x32/{firstTeam.short}.png" /> {firstTeam.name} <p>',
		'<img src="http://img.uefa.com/imgml/flags/32x32/{secondTeam.short}.png" /> {secondTeam.name}'
		].join(""),
		store: 'Matches',
		refs: {
			matchList : '#matchList',
			loginButton: 'loginform button',
			loginForm: 'loginform',
			signUp: '#signUp',
			mainPanel:'mainPanel',
			details: '#details'
		},

		initialize: function() {
			this.callParent(arguments);
			this.getEventDispatcher().addListener('element', '#matchList', 'swipe', this.onSwipe, this);
		}	
	},
	onSwipe :  function(event) {
		console.log("right swiprrrrre");
	}
})