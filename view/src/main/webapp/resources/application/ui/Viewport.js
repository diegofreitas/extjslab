Ext.define('Application.ui.Viewport', {
	extend: 'Ext.container.Viewport',
	requires:['Application.ui.TabMenu'/*,'Ext.ux.StatusBar'*/],
    layout: 'border',
    alias: 'widget.applicationviewport',
    items: [{
    	xtype:'component',
    	html:'ERP',
    	region:'north'
    },
        {
    		xtype:'panel',
    		collapsible: true,
    		items:[{
    			xtype:'tabmenu'
    		}],
        	
        	//collapsible: true,
        	//layout: '',
        	/*items:[{
        		xtype:'container',
        		html:'<h1>Application</h1>'
        	},{
        		xtype: 'toolbar',
        		items: [{
        			xtype:'button',
        			text:'About'
        		},{
        			
        			xtype:'button',
        			text:'Usuario: Diego Lins de Freitas',
        			handler:function(button){
        					Ext.create('Ext.window.Window', {
        					    title: 'Hello',
        					    height: 200,
        					    width: 400,
        					    draggable: false,
        					    resizeable: false
        					}).showAt(button.getPosition()[0],button.getPosition()[1] + button.getHeight());
        				}
        		}]
        	}],*/
        	region:'west'
        },
        {
        	xtype:'tabpanel',
        	id:'miolo',
        	region:'center',
    	    activeTab: 0
        }/*,
        {
        	xtype:'statusbar',
        	region:'south'
        }*/
    ]
});
 