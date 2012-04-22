Ext.define('EM.view.MyStats', {
	extend: 'Ext.Container',
	xtype: 'mystats',
	
	config: {
		id: 'my-stats',
		
		html: [
			'<div id="my-ranking">47<span class="total-contestants">/241</span></div>'
		].join("")
	}
})