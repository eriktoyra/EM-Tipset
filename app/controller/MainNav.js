Ext.define('EM.controller.MainNav', {
	extend: 'Ext.app.Controller',
/*	
	config: {
		refs: {
			mainPanel
		}
	}
	


	config: {
		refs: {
			matchList : '#matchList',
			loginButton: 'loginform button',
			loginForm: 'loginform',
			signUp: '#signUp',
			mainPanel:'mainPanel',
			details: '#details',
			views: ['MainToolbar', 'MainNav', 'MatchList', 'Details']			
		},
		control: {
			matchList: {
				itemtap: function() {
					console.log("tap!!!");
					this.slideInDetailsPanel();

				},
				itemswipe: function(target, item, index, event, eOpts) {
					if (eOpts.deltaX < 0) {
						this.slideInDetailsPanel();
					}
				},
			},
			loginButton: {
				tap: 'doLogin'
			},
			signUp: {
				tap: 'slideDetailsPanel'
			},
			details: {
				swipe: 'slideDetailsPanel'
			}

		}
	},
	
	initialize: function() {
		this.callParent(arguments);
		console.log("INIT!");
		this.getEventDispatcher().addListener('element', '#matchList', 'swipe', this.onSwipe, this);
	},
			
	onSwipe :  function(event) {
		console.log("controller swipe!!!" + this.getDetails());

	},

	slideDetailsPanel: function() {
		console.log("right swipe");
	},

	slideInDetailsPanel: function() {
		Ext.Anim.run(this.getDetails(), 'slide', {
			out: false,
			direction:'left',
			duration: 500
		});
		this.getDetails().setLeft(52);
	},



	doLogin: function() {
		console.log("Login...");

		Ext.Viewport.add({
			xtype:'matchList',
			id: 'matchList', 
			left: 0,
			top: 0, 
			width: "100%",
			height: "100%"
		});


		Ext.Viewport.add({
			xtype:'details',
			id:'details',
			left: 1000,
			top: 0, 
			width: "100%",
			height: "100%",
		});
	}
*/
});