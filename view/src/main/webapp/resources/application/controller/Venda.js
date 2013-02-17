Ext.define('Application.controller.Venda', {
    extend: 'Ext.app.Controller',
   
    mixins:{
    			module:'Application.framework.ModuleBehaviour',
    			list:'Application.framework.ListBehaviour',
    			formeditor:'Application.framework.FormEditorBehaviour',
    			search:'Application.framework.SearchBehaviour'
    		},
    
    models:['Application.model.Venda'],
    stores:['Vendas'],
    views:['VendaList','VendaForm'],
    
    
    config:{
    	i18n: Application.i18n.venda,
    	/**
    	 * selector for the main view of the module.
    	 */
		mainViewAlias:'vendaList',
		mainFormAlias:'vendaForm',
		storeId:'Vendas'
	},
    
	/**
	 * The init function, where events are configured and the mixins are initialized
	 * Since the init method is already defined, the mixins init methods aren't copied
	 * and we need call them manually.
	 */
    init: function() {
    	Novandi.initMixins(this);
    	var itemVendaController = this.getController('ItemVenda');
    	itemVendaController.init();
    	this.callParent(arguments);
    }
});