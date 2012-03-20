Ext.define('EM.view.MatchList', {
	extend: 'Ext.List',
	xtype: 'matchList',
	cls: 'matchList',

		
	config: {
	     grouped:true,
		 itemTpl: '{firstTeam} {secondTeam}',
		 store: 'Matches',
 		  

		
	  
	}	
/*
	config: {
		title: 'Hem',
		
		iconCls: 'home',
		cls: 'home',
		
		scrollable: true,
		styleHtmlContent: true,
		
		html: [
			'<img src="http://www.uefa.com/MultimediaFiles/Photo/competitions/Comp_Matches/01/76/12/72/1761272_S2.jpg" />',
			'<h1>EM Tipset 2012</h1>',
			'<h3>Ditt alternativ till Unibet <em>;)</em></h3>'
		].join("")
	}*/
	 
})