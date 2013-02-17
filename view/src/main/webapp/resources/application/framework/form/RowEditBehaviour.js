Ext.define('Application.framework.RowEditBehaviour', {
	
	
	config:{},
	
	init: function(){
        this.addEvents({
            "beforeNewItem" : true,
            "newItem" : true,
            "AfterNewItem" : true
        });
        
        Ext.applyIf(this.config,{
        	deleteButtonId : '#'+this.config.mainViewAlias+'-delete',
        	mainRowEditorId : this.config.mainViewAlias + '-roweditor',
        	mainGridId : '#'+this.config.mainViewAlias +'-gridpanel'
        });
        
        var controlObject = {};
        controlObject[this.config.mainViewAlias]={
        		newItem:function(grid){
        			this.fireEvent('newItem',grid);
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
    							this.application.fireEvent('notifyUser',{
    		    					msg:'Cadastro salvo com sucesso'
    		    				});
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
    						}
    					}
    				});
    			},
    			canceledit:function(pe){
    				pe.grid.getStore().rejectChanges();
    			}	
        };
        
        this.control(controlObject);
        
        this.on('newItem',this.onNewItem,this);
        
    },
    
    onNewItem:function(grid){
    	if(!grid.getStore){//caso seja disparado por evento de teclado
    		grid = Ext.ComponentQuery.query(this.config.mainGridId)[0];
    	}
    	var newItem = Ext.ModelManager.create({},this.models[0]);
    	this.fireEvent('beforeNewItem',newItem);
    	grid.getStore().insert(0,newItem);
    	grid.getPlugin( this.config.mainRowEditorId).startEdit(0,0);
    	this.fireEvent('afterNewItem',newItem);
    }
});