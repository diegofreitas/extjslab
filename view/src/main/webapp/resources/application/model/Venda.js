Ext.define('Application.model.Venda', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'id',
		type : 'int',
		useNull:true
	}, {
		name : 'total',
		type : 'double'
	} , {
		name : 'codigo',
		type : 'string'
	}, {
		name : 'funcionario',
		type : 'model'
	} , {
		name : 'cliente',
		type : 'model'
	} /*, {
		name : 'nome',
		type : 'string'
	} */ ]
/*	validations : [ {
		type : 'presence',
		field : 'nome'
	}],*/
	/*,
	listeners : {
		write : function(store, operation) {
			var record = operation.getRecords()[0], name = Ext.String
					.capitalize(operation.action), verb;

			if (name == 'Destroy') {
				record = operation.records[0];
				verb = 'Destroyed';
			} else {
				verb = name + 'd';
			}
			Ext.example.msg(name, Ext.String.format("{0} user: {1}", verb,
					record.getId()));

		}
	}*/
});