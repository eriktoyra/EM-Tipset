Ext.define('EM.controller.MainNav', {
	extend: 'Ext.app.Controller',
	
	init: function() {
		// Init operations if needed
		var currentVisiblePage = {};
	},
	
	launch: function() {
		// Launch operations if needed
		this.addNewPageInMainIfNotAlreadyExists('#results-page', 'EM.view.ResultsPage');
	},
	
	config: {
		refs: {
			resultsNav: '#results-nav-item',
			standingsNav: '#standings-nav-item',
			main: '#main'
		},
		
		control: {
			resultsNav: {
				tap: 'doTapResultNavItem'
			},
			standingsNav: {
				tap: 'doTapStandingsNavItem'
			},			
		}		
	},
	
	/**
	 * Adds the Resuls page when the user taps 'Results' in #mainNav 
	 */
	doTapResultNavItem: function() {
		this.removePreviousPageFromMainIfExists('#standings-page');		
		this.addNewPageInMainIfNotAlreadyExists('#results-page', 'EM.view.ResultsPage');		
	},

	/**
	 * Adds the Standings page when the user taps 'Standings' in #mainNav 
	 */	
	doTapStandingsNavItem: function() {
		this.removePreviousPageFromMainIfExists('#results-page');		
		this.addNewPageInMainIfNotAlreadyExists('#standings-page', 'EM.view.StandingsPage');		
	},
	
	/**
	 * Adds a new component in #main if it doesn't exist already
	 */ 
	addNewPageInMainIfNotAlreadyExists: function(ref, className) {
		var main  = this.getMain();
		var child = main.child(ref);
		
		if (!child) {
			// Creates the container as hidden and then shows it because I want to trigger the slideIn effect
			child = main.add(
				Ext.create(className, {
					hidden: true
				})
			)
		}
		this.setCurrentVisiblePage(child);
		child.show();
	},
	
	/**
	 * Removes a component from #main when another component should take its place
	 */ 
	removePreviousPageFromMainIfExists: function(ref) {
		this.getCurrentVisiblePage().hide();
	},

	getCurrentVisiblePage: function() {
		return this.currentVisiblePage;
	},

	setCurrentVisiblePage: function(ref) {
		this.currentVisiblePage = ref;
	},	
});