Ext.define('EM.view.MainNav', {
	extend: 'Ext.Toolbar',
	xtype: 'mainnav',

	requires: ['Ext.SegmentedButton'],
	
	config: {
		id: 'main-nav',
		dock: 'top',
		
		items: [
			{
				xtype: 'segmentedbutton',
				centered: true,
				cls: 'nav-item',
				activeItem: 0,				
				
					items: [
						{
							id: "results-nav-item",
							text: 'Resultat'
						},
						{
							id: 'standings-nav-item',
							text: 'Tabeller'
						}
					],
					listeners: {
						toggle: function(container, button, pressed) {
							console.log("User toggled the '" + button.text + "' button: " + (pressed ? 'on' : 'off'));
						}
					}
			}
		]		
	},
});