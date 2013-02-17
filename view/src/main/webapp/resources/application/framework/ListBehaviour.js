Ext.define('Application.framework.ListBehaviour', {
	
	config:{},
	
	init: function(){
        this.addEvents({
            "deleteItems" : true,
            "beforeDeleteItems" : true,
            "afterDeleteItems" : true
        });
        
        Ext.applyIf(this.config,{
         	deleteButtonId : '#'+this.config.mainViewAlias+'-delete',
         	mainGridId : '#'+this.config.mainViewAlias +'-gridpanel'
         });
        
        this.addEventDelatation('deleteItems',this.config.mainViewAlias);
        this.addEventDelatation('gridFocus',this.config.mainViewAlias);

        var controlObject = {};
        controlObject[this.config.mainGridId]={
        		selectionchange:function(sm){
    				this.getDeleteButton().setDisabled(sm.getSelection().length == 0);
    			}
        };
        
        this.control(controlObject);
        
        this.addRef({
        	ref:'mainView',
        	selector:this.config.mainViewAlias
        });
        this.addRef({
        	ref:'deleteButton',
        	selector:this.config.deleteButtonId
        });
        this.addRef({
        	ref:'mainGrid',
        	selector:this.config.mainGridId
        });
        
        this.on('deleteItems',this.onDeleteItems,this);
        this.on('search',this.onSearch,this);
        this.on('afterStart',this.onAfterStart,this);
        this.on('gridFocus',this.onGridFocus,this);
        this.on('reset',this.onReset,this);
        
        
    },
    
    onReset:function(){
    	this.getMainGrid().getView().getSelectionModel().deselectAll();
    },
    
    onGridFocus:function(){
    	sm= this.getMainGrid().getView().getSelectionModel();
    	if(Ext.isEmpty(sm.getSelection())){
    		sm.select(0);
    		this.getMainGrid().getView().focusRow(0);
    	}
    },
    
    onAfterStart:function(){
    	Ext.StoreMgr.lookup(this.stores[0]).on('beforeload',function(store){
    		store.proxy.extraParams = Ext.apply(store.proxy.extraParams, this.searchParams);
    	},this);
    },

    onSearch:function(values){
    	this.searchParams = values;
    	Ext.StoreMgr.lookup(this.stores[0]).loadPage(1);
    },
    
    onDeleteItems:function(){  	
    	var items = this.getMainGrid().getView().getSelectionModel().getSelection();
    	msgConfig = {
    			title:Application.i18n.title_confirm_delete,
    			width: 300,
    			buttons: Ext.Msg.OKCANCEL,
    	    	fn: function(confirmation){
    	    		if(confirmation == 'ok') {
    	    			this.doDelete(this.getMainGrid().getStore(), items);
    	    		}
    	    	},
    	    	animateTarget: this.getDeleteButton(),
    	    	icon: Ext.window.MessageBox.INFO,
    	    	scope:this
    	};
    	
    	if(items.length>1){
    		msgConfig.msg = Application.i18n.msg_confirm_delete_many.replace('{0}',items.length);
    	}else{
    		msgConfig.msg = Application.i18n.msg_confirm_delete.replace('{0}',items[0].get(this.config.i18n.entity_identifier));
    	}
    	Ext.Msg.show(msgConfig);
    },
    
    doDelete : function(store, items){
		this.fireEvent('beforeDeleteItems',items);
		store.remove(items);
		store.sync({
    		scope:this,
    		success:function(batch,request){
    			this.getMainView().getPlugin('notification').show(Notification.INFO,Application.i18n.sucsses_operation);
				this.fireEvent('afterDeleteItems',items);
    		},
    		failure:function(){
    			this.getMainView().getPlugin('notification').show(Notification.ERROR,Application.i18n.error_operation);
    		}
    	});
	}
    

});