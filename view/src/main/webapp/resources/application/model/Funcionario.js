Ext.define('Application.model.Funcionario', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'id',
		type : 'int',
        useNull: true
	}, {
		name : 'nome',
		type : 'string'
	}, {
		name : 'cpf',
		type : 'string'
	} , {
		name : 'rg',
		type : 'string'
	} , {
		name : 'fone',
		type : 'string'
	} , {
		name : 'email',
		type : 'string'
	} , {
		name : 'endereco',
		type : 'string'
	} , {
		name : 'nascimento',
		type : 'date',
		dateFormat:'d/m/Y'
	} , {
		name : 'admissao',
		type : 'date',
		dateFormat:'d/m/Y'
	}, {
		name : 'sexo',
		type : 'string'
	} , {
		name : 'contrato',
		type : 'model'
	} /*, {
		name : 'nome',
		type : 'string'
	} */ ],
/*	validations : [ {
		type : 'presence',
		field : 'nome'
	}],*/
	proxy : {
		type : 'rest',
		url : 'rest/funcionarios'
	}/*,
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