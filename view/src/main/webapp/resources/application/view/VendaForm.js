Ext.define('Application.view.VendaForm', {
	extend : 'Ext.Window',
	alias : 'widget.vendaForm',
	id:'vendaForm',
	layout:'fit',

	
	width: 500,
	height: 580,

	plugins:['notification',{
		ptype:'fieldfocusplugin',
		defaultField:'vendedoresField'
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
				xtype : 'displayfield',
				fieldLabel : 'Codigo',
				name : 'codigo'
			},{
				id:'vendedoresField',
				xtype : 'combobox',
				fieldLabel : 'Vendedor',
				name : 'funcionario',
			    store: Application.store.CommonStores.Vendedores(),
			    displayField: 'nome',
			    valueField: 'id',
			},{
				xtype : 'combobox',
				fieldLabel : 'Cliente',
				name : 'cliente',
			    store: Application.store.CommonStores.Clientes(),
			    displayField: 'nome',
			    valueField: 'id',
			},{
				xtype : 'itemVendaList',
				title:'Items'
			},{
				xtype : 'displayfield',
				fieldLabel : 'Total',
				name : 'total'
			}]
	})],
	
	initComponent:function(){
		Ext.Array.forEach(this.visitors,function(visitor){
			visitor.visit(this);
		},this);
		this.callParent();
	}
	
});