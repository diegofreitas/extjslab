Ext.define('Application.view.ItemVendaList', {
	extend : 'Ext.Panel',

	alias : 'widget.itemVendaList',
	id : 'itemVendaList',
	layout : 'fit',

	config : {
		i18n : Application.i18n.item_venda
	},

	plugins : [ 'notification', {
		ptype : 'fieldfocusplugin',
		defaultField : 'itemVendaSearchField'
	}, {
		ptype : 'keymapsupport',
		keyBindings : [ {
			key : Ext.EventObject.F2,
			event : 'new',
		}, {
			key : Ext.EventObject.F3,
			event : 'edit',
			stop : true
		}, {
			key : Ext.EventObject.F4,
			event : 'copy'
		}, {
			key : Ext.EventObject.DELETE,
			event : 'deleteItems'
		}, {
			key : Ext.EventObject.F6,
			event : 'search'
		}, {
			key : Ext.EventObject.F8,
			event : 'reset'
		}, {
			key : Ext.EventObject.DOWN,
			event : 'gridFocus'
		} ],
	} ],

	visitors : [ Ext.create('Novandi.GridVisitor', {
		storeId : 'ItemVenda',
		columns : [ {
			text : 'Produto',
			dataIndex : 'produto',
			flex : 1,
			field : {
				xtype : 'combobox',
			    store: Application.store.CommonStores.Produtos(),
			    displayField: 'descricao',
			    valueField: 'id',
			    renderer:function(produto){
			    	return produto.descricao;
			    }
			}
		},{
			text : 'Quantidade',
			dataIndex : 'quantidade',
			flex : 1,
			field : {
				xtype : 'textfield'
			}
		},{
			text : 'Preco',
			dataIndex : 'produto',
			flex : 1,
			renderer: function(produto){
				if(produto)
					return produto.preco;
			}
		},{
			text : 'Total',
			dataIndex : 'total',
			flex : 1
		} ]
	}), Ext.create('Novandi.ListButtonsVisitor'),
			Ext.create('Novandi.RowEditorVisitor'),
			Ext.create('Novandi.SimpleSearchFormVisitor',{
				searchFieldId:'itemVendaSearchField'
			}) ],

	initComponent : function() {
		this.title = this.config.i18n.list_title;

		Ext.Array.forEach(this.visitors, function(visitor) {
			visitor.visit(this);
		}, this);

		this.callParent(arguments);
	}

});