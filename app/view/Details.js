Ext.define('EM.view.Details', {
	extend: 'Ext.form.Panel',
	id: 'details',
	xtype: 'details',
	cls: 'details',

		
	config: {
		
	
		html: [
			
			'<h1>Detaljerad information: statistik, ranking, tips och mycket mycket mer!</h1>',
			
		].join("")
	},
	
	initialize: function() {
		this.callParent(arguments);
		/*this.getEventDispatcher().addListener('element', '#details', 'drag', this.onDrag, this);
		this.getEventDispatcher().addListener('element', '#details', 'dragend', this.onDragEnd, this);*/
		this.getEventDispatcher().addListener('element', '#details', 'swipe', this.onSwipe, this);
	},	

	onSwipe :  function(event) {
		if (event.deltaX > 0) {
			Ext.Anim.run(this, 'slide', {
			    out: true,
				direction:'right',
				duration: 500,
				//TODO - after does fire instantly and not after animation as described in documentation!!!
				after: this.setOutside()
			});

		}
	},
	
	setOutside: function() {
		this.setLeft(1000);
	},

	
	onDrag : function (e, target, options, eventController) {
		
		//console.log("L" + this.getLeft());
		//console.log("Del" + e.deltaX);
		//console.log("LastDel" + this.latestDeltaX);
		this.setLeft(this.getLeft() + e.deltaX - this.latestDeltaX);
		
		
		this.latestDeltaX = e.deltaX;
		
		
		//this.latestDeltaX = e.deltaX;
	},
	
	onDragEnd: function() {

		this.latestDeltaX=0;
	},
	
	latestDeltaX:0

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