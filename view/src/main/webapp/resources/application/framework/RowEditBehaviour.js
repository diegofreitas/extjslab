Ext.define('Application.framework.RowEditBehaviour', {
	
	init: function(){
        this.addEvents({
            "beforeNewItem" : true,
            "new" : true,
            "AfterNewItem" : true
        });
        
        Ext.applyIf(this.config,{
        	mainRowEditorId : this.config.mainViewAlias + '-roweditor',
        	mainGridId : '#'+this.config.mainViewAlias +'-gridpanel'
        });
        
        var controlObject = {};
        controlObject[this.config.mainViewAlias]={
        		'new':function(grid){
        			this.fireEvent('new',grid);
        		}
        };
       

        controlObject[this.config.mainGridId]={
        		selectionchange:function(sm){
    				Ext.ComponentQuery.query(this.config.deleteButtonId)[0].setDisabled(sm.getSelection().length == 0);
    			},
    			beforeedit:function(pe){
    				//pe.grid.getView().getSelectionModel().deselectAll();
    			},
    			edit:function(pe){
    				pe.grid.getStore().sync({
    					scope:this,
    					success:function(batch,request){
    						//if(request.operations.create){
    						this.getMainView().getPlugin('notification').show(Notification.INFO,Application.i18n.sucsses_operation);
    				    	this.getMainView().getPlugin('fieldfocusplugin').focusDefaultField();
    							/*}else if(request.operations.update){
    							this.application.fireEvent('notifyUser',{
    		    					msg:'Items criados com sucesso'
    		    				});
    						}*/
    					},
    					failure:function(batch){
    						if(batch.exceptions[batch.current].error.status == 400){
    							var responseError = Ext.JSON.decode(this.application.currentXhr.responseText);
    							
    							var index=pe.grid.getStore().indexOf(pe.grid.getView().getSelectionModel().getSelection()[0]);
    							pe.startEdit(index,0);
    							pe.editor.form.markInvalid(responseError.errors);
    							this.getMainView().getPlugin('notification').show(Notification.ERROR,Application.i18n.data_validity_error_message);
    							
    						}
    					}
    				});
    			},
    			canceledit:function(pe){
    				pe.grid.getStore().rejectChanges();
    			}	
        };
        
        this.control(controlObject);
        
        this.on('new',this.onNewItem,this);
        
    },
    
    onNewItem:function(){
    	grid = Ext.ComponentQuery.query(this.config.mainGridId)[0];
    	var newItem = Ext.ModelManager.create({id:null},this.models[0]);
    	this.fireEvent('beforeNewItem',newItem);
    	grid.getStore().insert(0,newItem);
    	grid.getPlugin( this.config.mainRowEditorId).startEdit(0,0);
    	this.fireEvent('afterNewItem',newItem);
    }
});