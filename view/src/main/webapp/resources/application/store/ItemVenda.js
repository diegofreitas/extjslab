Ext.define('Application.store.ItemVenda', {
	extend : 'Ext.data.Store',
	model : 'Application.model.ItemVenda',
	storeId:'ItemVenda',
	autoLoad:false,
	proxy : {
		type : 'rest',
		url : 'rest/venda/item'
	}
});