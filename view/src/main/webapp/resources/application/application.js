Ext.Loader.setConfig({
	enabled:true,
	paths:{
	    'Ext': 'application'
	}
});

Ext.application({
    name: 'Application',
    
    requires:['Ext.ux.Router','Application.ui.TabMenu',
              'Application.framework.Notification',
              'Application.framework.ViewFactory',
              'Application.framework.KeyMapSupport',
              'Application.framework.plugin.FieldFocusPlugin',
              'Application.framework.view.GridBuilderVisitor',
              'Application.framework.view.ListButtonsVisitor',
              'Application.framework.view.SearchFormVisitor',
              'Application.framework.view.EditFormVisitor',
              'Application.framework.view.RowEditorVisitor',
              'Application.framework.view.SimpleSearchFormVisitor',
              'Application.store.CommonStores'],
    
    //controllers:['Dashboard'],

    appFolder: 'application',
    
    /**
     * Ext.app.Application do not have this attribute which is required in order to setup the listeners object.
     */
    events: {},

	listeners : {
		addView : {
			fn : function(view) {
				var miolo = Ext.ComponentQuery.query('#miolo')[0];
				if (miolo) {
					if (Ext.isString(view)) {
						view = this.getView(view);
					}
					/*element = miolo.getComponent(view.xtype);
					if (element) {
						miolo.remove(element);
					}*/
					//new view().show();
					//miolo.setActive(true, miolo.add(view));
					//miolo.doLayout();
					Ext.create(view,{
						modal: true,
						//closeable:false,
						renderTo: Ext.getBody(),
						//maximized:true
					}).show();
				}
			}
			
		},
		notifyUser:{
			fn :function(messageCfg){
				Ext.Msg.show(Ext.apply({
					title:'Informacao',
					icon: Ext.Msg.INFO,
					buttons: Ext.Msg.OK
				},messageCfg));
			}
		}
	},
    
    routes: {
        '/'        		: 'dashboard#start',
        'funcionarios'  : 'funcionario#start',
        'setores'  : 'setor#start',
        'vendas'  : 'venda#start'
    },

    launch: function() {
        Ext.create('Application.ui.Viewport');
        
        Ext.Ajax.on('requestexception',function(conn,  response, options, eOpts){
        	this.currentXhr = response;
        	if(response.status == 500){
        		var errorMessage = Ext.JSON.decode(response.responseText);
        		Ext.Msg.show({
					title:'Erro de Sistema',
					msg:errorMessage.description,
					icon: Ext.Msg.ERROR,
					buttons: Ext.Msg.OK
				});
        	}
        },this);
    }
});

