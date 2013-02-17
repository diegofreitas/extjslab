Ext.define('Application.framework.view.SimpleSearchFormVisitor', {
	alias:['Novandi.SimpleSearchFormVisitor'],

	config:{
		searchFieldId: null
	},
	
	constructor: function(cfg) {
        this.initConfig(cfg);
    },
	
	
	visit:function(view){
		view.dockedItems = view.dockedItems || [];
		view.dockedItems.push( {
			id:view.id+'-search-form',
			xtype:'form',
			items:[{
				id:this.searchFieldId? this.searchFieldId:'firstSearchField',
				xtype: 'textfield',
		        fieldLabel: 'Pesquisar(Enter)',
		        name: 'pesquisar',
		        helpText:'A pesquisa sera feita em todos as colunas no grid',
		        enableKeyEvents: true,
		        listeners:{
		        	keypress:function(field,event){
		        		if(event.getKey() == Ext.EventObject.ENTER){
		        			view.fireEvent('search',this.up('form'));
		        		}
		        	}
		        }
		    }]
		});
	}

});