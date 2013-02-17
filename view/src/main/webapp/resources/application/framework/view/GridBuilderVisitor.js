Ext.define('Application.framework.view.GridBuilderVisitor', {
	alias:['Novandi.GridVisitor'],
	
	config:{
		storeId:'',
		columns:[]
	},
	
	constructor: function(cfg) {
        this.initConfig(cfg);
    },
	
	visit:function(view){
		view.items = view.items || [];
		view.items.push( {
			id:view.id+'-gridpanel',
			//title:view.config.i18n.list_title,
			xtype : 'gridpanel',
			selModel : Ext.create('Ext.selection.CheckboxModel'),
			store: this.storeId,
			columns : this.columns,
			dockedItems : [{
		    		        xtype: 'pagingtoolbar',
		    		        dock: 'bottom',
		    		        store: this.storeId,
		    		        displayInfo: true
		    		    }]
		});
	}

});