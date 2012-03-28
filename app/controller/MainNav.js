Ext.define('EM.controller.MainNav', {
	extend: 'Ext.app.Controller',
	
	init: function() {
		// Init operations if needed
	},
	
	launch: function() {
		// Launch operations if needed
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
		if (!this.getMain().child(ref)) {
			this.getMain().add(
				Ext.create(className, {})
			)
		}		
	},
	
	/**
	 * Removes a component from #main when another component should take its place
	 */ 
	removePreviousPageFromMainIfExists: function(ref) {
		var previousPage = this.getMain().child(ref);
		
		if (previousPage) {
			this.getMain().remove(previousPage);
		}		
	}
});