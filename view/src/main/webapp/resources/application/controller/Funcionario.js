Ext.define('Application.controller.Funcionario', {
    extend: 'Ext.app.Controller',
    
   
    mixins:{
    			module:'Application.framework.ModuleBehaviour',
    			list:'Application.framework.ListBehaviour',
    			//roweditor:'Application.framework.RowEditBehaviour',
    			formeditor:'Application.framework.FormEditorBehaviour',
    			search:'Application.framework.SearchBehaviour'
    		},
    
    models:['Application.model.Funcionario'],
    stores:['Funcionarios'],
    views:['FuncionarioList','FuncionarioForm'],
    
    
    config:{
    	i18n: Application.i18n.funcionario,
    	/**
    	 * selector for the main view of the module.
    	 */
		mainViewAlias:'funcionarioList',
		mainFormAlias:'funcionarioForm',
		storeId:'Funcionarios'
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