Ext.define('Application.store.Vendas', {
	extend : 'Ext.data.Store',
	model : 'Application.model.Venda',
	storeId:'Vendas',
	autoLoad:true,
	proxy : {
		type : 'rest',
		url : 'rest/vendas',
		reader: {//TODO fazer override disso
             type: 'json',
             root: 'content',
             totalProperty:'totalElements'
         }
	}
});