Ext.define('Application.controller.Setor', {
    extend: 'Ext.app.Controller',
    
   
    mixins:{
    			module:'Application.framework.ModuleBehaviour',
    			list:'Application.framework.ListBehaviour',
    			roweditor:'Application.framework.RowEditBehaviour',
    			search:'Application.framework.SearchBehaviour'
    		},
    
    models:['Application.model.Setor'],
    stores:['Setores'],
    views:['SetorList'],
    
    
    config:{
    	i18n: Application.i18n.setor,
    	/**
    	 * selector for the main view of the module.
    	 */
		mainViewAlias:'setorList',
		mainFormAlias:'setorForm',
		storeId:'Setores'
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