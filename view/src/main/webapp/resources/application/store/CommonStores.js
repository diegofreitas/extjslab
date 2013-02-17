Ext.define('Application.store.CommonStores', {
	alias:['Novandi.CommonStores'],
	
	statics:{
		sexo:function(){
			return Ext.create('Ext.data.Store', {
		        fields: ['sexo'],
		        data : [
		            {"sexo":"Masculino"},
		            {"sexo":"Feminino"}
		        ]
		    });
		},
		contrato:function(){
			return Ext.create('Ext.data.Store', {
		        fields: ['id','descricao'],
		        autoLoad:false,
		    	proxy : {
		    		type : 'rest',
		    		url : 'rest/contratos'
		    	}
		    });
		}
		,
		Clientes:function(){
			return Ext.create('Ext.data.Store', {
		        fields: ['id','nome'],
		        autoLoad:false,
		    	proxy : {
		    		type : 'rest',
		    		url : 'rest/clientes'
		    	}
		    });
		},
		Vendedores:function(){
			return Ext.create('Ext.data.Store', {
		        fields: ['id','nome'],
		        autoLoad:false,
		    	proxy : {
		    		type : 'rest',
		    		url : 'rest/funcionarios/vendedores'
		    	}
		    });
		},
		Produtos:function(){
			return Ext.create('Ext.data.Store', {
		        fields: ['id','descricao','preco'],
		        autoLoad:false,
		    	proxy : {
		    		type : 'rest',
		    		url : 'rest/produtos'
		    	}
		    });
		}
		
	}
});