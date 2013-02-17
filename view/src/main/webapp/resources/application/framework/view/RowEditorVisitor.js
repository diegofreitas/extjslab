Ext.define('Application.framework.view.RowEditorVisitor', {
	alias:['Novandi.RowEditorVisitor'],
	
	visit:function(view){
		Ext.Array.forEach(view.items,function(item){
			if(item.xtype == 'gridpanel'){
				item.plugins = item.plugins || [];
				item.plugins.push( Ext.create('Ext.grid.plugin.RowEditing', {
				    			   	clicksToEdit: 2,
				    			    pluginId: view.id+'-roweditor'
				}));
			}
		});
		
	}

});