Ext.define('Application.view.SetorList', {
	extend : 'Ext.Window',

	alias : 'widget.setorList',
	id : 'setorList',
	layout : 'fit',
	width : 600,
	height : 600,

	config : {
		i18n : Application.i18n.setor
	},

	plugins : [ 'notification', {
		ptype : 'fieldfocusplugin',
		defaultField : 'firstSearchField'
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
		storeId : 'Setores',
		columns : [ {
			text : 'Descricao',
			dataIndex : 'descricao',
			flex : 1,
			field : {
				xtype : 'textfield'
			}
		} ]
	}), Ext.create('Novandi.ListButtonsVisitor'),
			Ext.create('Novandi.RowEditorVisitor'),
			Ext.create('Novandi.SimpleSearchFormVisitor') ],

	initComponent : function() {
		this.title = this.config.i18n.list_title;

		Ext.Array.forEach(this.visitors, function(visitor) {
			visitor.visit(this);
		}, this);

		this.callParent(arguments);
	}

});