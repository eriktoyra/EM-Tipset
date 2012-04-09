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
				docked: 'right',
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
			}
		]		
	}
});