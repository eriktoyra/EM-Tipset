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
				docked: 'left',
				allowDepress: false,				
				cls: 'nav-item',				

					items: [
						{
							id: "results-nav-item",
							text: 'Mitt tips',
							pressed: true, 
						},
						{
							id: 'standings-nav-item',
							text: 'Deltagare'
						}
					],
			},
			{
				docked: 'right',
				html: '<div id="league-select">Alla ligor</div>'
			}
		]		
	}
});