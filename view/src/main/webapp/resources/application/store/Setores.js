Ext.define('Application.store.Setores', {
	extend : 'Ext.data.Store',
	model : 'Application.model.Setor',
	storeId:'Setores',
	autoLoad:true,
	proxy : {
		type : 'rest',
		url : 'rest/setores'
	}
});