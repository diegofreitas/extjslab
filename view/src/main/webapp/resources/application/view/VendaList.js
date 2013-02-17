Ext.define('Application.view.VendaList', {
	extend : 'Ext.Window',
	
	alias : 'widget.vendaList',
	id:'vendaList',
	layout:'fit',
	width: 600,
	height: 600,
	
	
	
	config:{
		i18n: Application.i18n.venda
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
			storeId:'Vendas',
			columns:[{
	            text: 'Codigo',
	            sortable: true,
	            dataIndex: 'codigo',
	            renderer: function(v){
	                if (Ext.isEmpty(v)) {
	                    v = '&#160;';
	                }
	                return v;
	            }
	        },{
				text : 'Total',
				dataIndex : 'nome',
				flex:1
			},{
				text : 'Cliente',
				dataIndex : 'cliente',
				flex:1,
				renderer:function(value){
					if(!Ext.isEmpty(value)){
						return value.nome;
					}
				}
			} ]
	}),
		Ext.create('Novandi.ListButtonsVisitor'),
		Ext.create('Novandi.SearchFormVisitor',{
			 fields:[{
					id:'firstSearchField',
					xtype: 'textfield',
			        fieldLabel: 'Cliente',
			        name: 'cliente'
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