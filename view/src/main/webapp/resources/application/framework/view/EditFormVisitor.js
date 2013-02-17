Ext.define('Application.framework.view.EditFormVisitor', {
	alias:['Novandi.EditFormVisitor'],
	
	config:{
		fields:[]
	},
	
	constructor: function(cfg) {
        this.initConfig(cfg);
    },
	
	visit:function(view){
		view.items = view.items || [];
		view.items.push( {
			xtype:'form',
   			id: view.id+'-formpanel',
   			trackResetOnLoad : true,
   			bodyPadding:10,
   			items: this.fields,
   			dockedItems : [{
   				xtype:'toolbar',
   				dock:'bottom',
   				items:[ '->',Application.framework.ViewFactory.createCancelButton(view),
   				       	'-',
   				       	Application.framework.ViewFactory.createSaveButton(view)
   				       ]
   			}]
			
		});
		view.closable = false;
		view.tools = view.tools || [];
		view.tools.push( {
		    type:'close',
		    tooltip: 'Fechar',
		    handler: function(event, toolEl, header){
		    	header.up('window').fireEvent('cancel');
		    }
		});
	}

});