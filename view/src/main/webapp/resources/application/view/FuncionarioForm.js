Ext.define('Application.view.FuncionarioForm', {
	extend : 'Ext.Window',
	alias : 'widget.funcionarioForm',
	id:'funcionarioForm',
	title : 'Funcionarios',
	layout:'fit',

	
	width: 500,
	height: 580,

	plugins:['notification',{
		ptype:'fieldfocusplugin',
		defaultField:'funcionarioNomeField'
	},{
		ptype:'keymapsupport',
		keyBindings:[{
	   	 	key:Ext.EventObject.F2,
	   	 	event: 'save',
	   	 	
		},{
			key:Ext.EventObject.ESC,
		 	event: 'cancel'
		}],
	}],
	
	visitors:[Ext.create('Novandi.EditFormVisitor',{
		 fields:[{
			 	id:'funcionarioNomeField',
				xtype : 'textfield',
				fieldLabel : 'Nome',
				name : 'nome'
			},{
				xtype : 'combobox',
				fieldLabel : 'Sexo',
				name : 'sexo',
				editable:false,
			    store: Application.store.CommonStores.sexo(),
			    queryMode: 'local',
			    displayField: 'sexo',
			    valueField: 'sexo',
			},{
				xtype : 'textfield',
				fieldLabel : 'CPF',
				name : 'cpf'
			},{
				xtype : 'textfield',
				fieldLabel : 'RG',
				name : 'rg'
			},{
				xtype : 'textfield',
				fieldLabel : 'Fone',
				name : 'fone'
			},{
				xtype : 'textfield',
				fieldLabel : 'Email',
				name : 'email'
			},{
				xtype : 'textfield',
				fieldLabel : 'Endereco',
				name : 'endereco'
			},{
				xtype : 'datefield',
				fieldLabel : 'Nacimento',
				name : 'nascimento',
				format: 'd/m/Y',
			},{
				xtype : 'datefield',
				fieldLabel : 'Admissao',
				name : 'admissao',
				format: 'd/m/Y',
			},{
				xtype : 'combobox',
				fieldLabel : 'Contrato',
				name : 'contrato',
			    store: Application.store.CommonStores.contrato(),
			    displayField: 'descricao',
			    valueField: 'id'
			}]
	})],
	
	initComponent:function(){
		Ext.Array.forEach(this.visitors,function(visitor){
			visitor.visit(this);
		},this);
		this.callParent();
	}
	
});