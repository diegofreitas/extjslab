Ext.define('Application.controller.ItemVenda', {
    extend: 'Ext.app.Controller',
    
   
    mixins:{
    			module:'Application.framework.ModuleBehaviour',
    			list:'Application.framework.ListBehaviour',
    			roweditor:'Application.framework.RowEditBehaviour',
    			search:'Application.framework.SearchBehaviour'
    		},
    
    models:['Application.model.ItemVenda'],
    stores:['ItemVenda'],
    views:['ItemVendaList'],
    
    
    config:{
    	i18n: Application.i18n.item_venda,
		mainViewAlias:'itemVendaList',
		storeId:'ItemVenda'
	},
    
	/**
	 * The init function where events are configured and the mixins are initialized
	 * Since the init method is already defined, the mixins init methods aren't copied
	 * and we need call them manually.
	 */
    init: function() {
    	Novandi.initMixins(this);
    	this.callParent(arguments);
    }
});