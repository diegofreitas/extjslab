Ext.define('Application.view.FuncionarioList', {
	extend : 'Ext.Window',
	
	alias : 'widget.funcionarioList',
	id:'funcionarioList',
	layout:'fit',
	width: 600,
	height: 600,
	
	
	
	config:{
		i18n: Application.i18n.funcionario
	},
	
	plugins:['notification',{
		ptype:'fieldfocusplugin',
		defaultField:'firstSearchField'
	},{
		ptype:'keymapsupport',
		keyBindings:[{
	   	 	key:Ext.EventObject.F2,
	   	 	event: 'new',
		},{
			key:Ext.EventObject.F3,
	   	 	event: 'edit',
	   	 	stop:true
		},{
			key:Ext.EventObject.F4,
	   	 	event: 'copy'
		},{
			key:Ext.EventObject.DELETE,
	   	 	event: 'deleteItems'
		},{
			key:Ext.EventObject.F6,
	   	 	event: 'search'
		},{
			key:Ext.EventObject.F8,
	   	 	event: 'reset'
		},{
			key:Ext.EventObject.DOWN,
	   	 	event: 'gridFocus'
		}],
	}],
	
	visitors:[Ext.create('Novandi.GridVisitor',{
			storeId:'Funcionarios',
			columns:[{
	            text: 'ID',
	            sortable: true,
	            dataIndex: 'id',
	            renderer: function(v){
	                if (Ext.isEmpty(v)) {
	                    v = '&#160;';
	                }
	                return v;
	            }
	        },{
				text : 'Nome',
				dataIndex : 'nome',
				flex:1
			},{
				text : 'Nome',
				dataIndex : 'nome',
				flex:1
			},{
				text : 'Contrato',
				dataIndex : 'contrato',
				flex:1,
				renderer:function(value){
					if(!Ext.isEmpty(value)){
						return value.descricao;
					}
				}
			} ]
	}),
		Ext.create('Novandi.ListButtonsVisitor'),
		Ext.create('Novandi.SearchFormVisitor',{
			 fields:[{
					id:'firstSearchField',
					xtype: 'textfield',
			        fieldLabel: 'Nome',
			        name: 'nome'
			}]
		})
	],


	initComponent:function(){
		this.title = this.config.i18n.tab_title;

		Ext.Array.forEach(this.visitors,function(visitor){
			visitor.visit(this);
		},this);
		
		this.callParent(arguments);
	}

});