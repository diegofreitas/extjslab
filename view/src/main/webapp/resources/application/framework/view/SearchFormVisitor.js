Ext.define('Application.framework.view.SearchFormVisitor', {
	alias:['Novandi.SearchFormVisitor'],
	
	config:{
		fields:[]
	},
	
	constructor: function(cfg) {
        this.initConfig(cfg);
    },
	
	visit:function(view){
		view.dockedItems = view.dockedItems || [];
		view.dockedItems.push( {	
		    	id:view.id+'-search-form',
				xtype:'form',
				height:55,
				width:200,
				items: this.fields,
				rbar: [
				       Application.framework.ViewFactory.createSearchButton(view),
				       Application.framework.ViewFactory.createResetButton(view)
				]
		   
		});
	}

});