Ext.define('Application.store.Funcionarios', {
	extend : 'Ext.data.Store',
	model : 'Application.model.Funcionario',
	storeId:'Funcionarios',
	autoLoad:true,
	proxy : {
		type : 'rest',
		url : 'rest/funcionarios',
		reader: {//TODO fazer override disso
             type: 'json',
             root: 'content',
             totalProperty:'totalElements'
         }
	}
});