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
				allowDepress: false,				
				cls: 'nav-item',				

					items: [
						{
							id: "results-nav-item",
							text: 'Resultat',
							pressed: true, 
						},
						{
							id: 'standings-nav-item',
							text: 'Tabeller'
						}
					],
					/*listeners: {
						toggle: function(container, button, pressed) {
							console.log(container.getParent());
							console.log("User toggled the '" + button.getText() + "' button: " + (pressed ? 'on' : 'off'));
						}
					}*/
			}
		]		
	}
});