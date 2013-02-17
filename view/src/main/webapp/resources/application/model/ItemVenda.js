Ext.define('Application.model.ItemVenda', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'id',
		type : 'int',
		useNull:true
	}, {
		name : 'total',
		type : 'double'
	} , {
		name : 'quantidade',
		type : 'double'
	}, {
		name : 'produto',
		type : 'model'
	} /*, {
		name : 'nome',
		type : 'string'
	} */ ]
});