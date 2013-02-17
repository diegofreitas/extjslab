Ext.define('Application.framework.view.ListButtonsVisitor', {
	alias:['Novandi.ListButtonsVisitor'],
	
	visit:function(view){
		view.dockedItems = view.dockedItems || [];
		view.dockedItems.push( {
			xtype : 'toolbar',
			items : [
				Application.framework.ViewFactory.createNewButton(view),
				'-',
				Application.framework.ViewFactory.createEditButton(view),
				'-',
				Application.framework.ViewFactory.createDeleteButton(view),
				'-',
				Application.framework.ViewFactory.createCopyButton(view)
			]
		});
	}

});