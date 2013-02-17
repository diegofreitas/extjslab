Ext.define('Application.ui.TabMenu', {
	extend: 'Ext.Panel',
	alias: 'widget.tabmenu',
	layout: {
        // layout-specific configs go here
        type: 'accordion',
        animate: true
    },
	menuItems: [{
		title: 'Recursos Humanos',
		items: ['funcionarios','caixa','dashboard']
	},{
		title: 'Financeiro',
		items: ['funcionarios','caixa']
	}],
	
	initComponent:function(){
		this.items = Application.ui.TabMenu.createMenu(this.menuItems);
		this.callParent(arguments);
	},

    statics:{
    	createButton:function(id){
        	return  {
        		xtype:'button',
        	    width:60,
        	    height: 60,
        	    cls: id+'-icon',
        	    handler: function() {
        	        document.location.href="#"+id;
        	    }
        	};
        },
	    createItems:function(itemsConfig){
	    	var items = [];
	    	for(var index=0;itemsConfig.length >index;index++){
	    		items.push(Application.ui.TabMenu.createButton(itemsConfig[index]));
	    	}
	    	return items;
	    },
	    createMenu:function(menuConfig){
	    	var menu = [];
	    	for(var index=0;menuConfig.length >index;index++){
	    		menu.push({
				    xtype:'panel',
				    height:100,
				    //layout:'vbox',
			    	title:menuConfig[index].title,
			    	items:Application.ui.TabMenu.createItems(menuConfig[0].items)       
			    });
	    	}
	    	return menu;
	    }
    }
    
});
