Ext.define('Application.framework.FormEditorBehaviour', {
	
	init: function(){

        Ext.applyIf(this.config,{
        	saveButtonId : '#'+this.config.mainFormAlias+'-save',
        	editButtonId : '#'+this.config.mainViewAlias+'-edit',
        	formPanelId : '#'+this.config.mainFormAlias + '-formpanel',
        	formViewId : '#'+this.config.mainFormAlias
        });
        
        this.addRef({
        	ref:'saveButton',
        	selector:this.config.saveButtonId
        });
        this.addRef({
        	ref:'editButton',
        	selector:this.config.editButtonId
        });
        this.addRef({
        	ref:'formPanel',
        	selector:this.config.formPanelId
        });
       /* this.addRef({
        	ref:'formView',
        	selector:this.config.formViewId
        });*/
        
        
        this.addEventDelatation('new',this.config.mainViewAlias);
        this.addEventDelatation('edit',this.config.mainViewAlias);
        this.addEventDelatation('save',this.config.mainFormAlias);
        this.addEventDelatation('cancel',this.config.mainFormAlias);
        
        var controlObject = {};
        
        controlObject[this.config.mainFormAlias + ' panel']={
        		dirtychange:this.onDirtyChange,
        		validitychange:this.onValidityChange
        };
        
        controlObject[this.config.mainGridId]={
        		selectionchange:function(sm){
    				this.getEditButton().setDisabled(sm.getSelection().length == 0 || sm.getSelection().length > 1);
    			}
        };
        
        this.control(controlObject);
        
        this.on('new',this.onNewItem,this);
        this.on('save',this.onSave,this);
        this.on('edit',this.onEdit,this);
        this.on('afterSave',this.onAfterSave,this);
        this.on('cancel',this.onCancel,this);
    },
    
    onDirtyChange:function(formBasic, dirty,eOpts ){
    	if(dirty){
    		this.getSaveButton().enable();
    		//header.setStyle('background-color','red');
    		this.formView.setTitle(this.formView.title+Application.i18n.data_changed_header);
    	}else{
    		this.getSaveButton().disable();
    		this.formView.setTitle(this.formView.title.replace(Application.i18n.data_changed_header,''));
    		//header.setStyle('background-color','transparent');
    	}
    },
    
    onValidityChange:function(formBasic, valid,eOpts ){
    	if(valid){
    		this.formView.getPlugin('notification').hide();
    	}else{
    		this.formView.getPlugin('notification').show(Notification.ERROR,Application.i18n.data_validity_error_message);
    	}
    },
    
    onCancel:function(){
    	if(this.getFormPanel().getForm().isDirty()){
    		  Ext.Msg.confirm(Application.i18n.cancel_form_confirm_header,
    				  Application.i18n.cancel_form_confirm_message, 
    				  function(btn, text){
    		      if (btn == 'yes'){
    		    	  this.removeFormView();
    		    	  Ext.StoreMgr.lookup(this.stores[0]).rejectChanges();
    		      }
    		    },this);
    	}else{
    		 this.removeFormView();
    	}

    },
    
    onAfterSave:function(){
    	this.removeFormView();
    	this.getMainView().getPlugin('notification').show(Notification.INFO,Application.i18n.sucsses_operation);
    	this.getMainView().getPlugin('fieldfocusplugin').focusDefaultField();
    },
    
    removeFormView:function(){
    	this.formView.destroy();
    },
    
    onEdit:function(){
    	var entity = this.getMainGrid().getSelectionModel().getSelection()[0];
    	this.loadForm(entity);
    	this.formView.setTitle(this.config.i18n.edit_entity_header + entity.get(this.config.i18n.entity_identifier));
    },
    
    onNewItem:function(){
    	var newItem = Ext.ModelManager.create({},this.models[0]);
    	this.loadForm(newItem);
    	this.formView.setTitle(this.config.i18n.new_entity_header);
    },
    
    loadForm:function(entity){
		this.createFormEditor();
    	this.getFormPanel().suspendEvents();
    	this.getFormPanel().getForm().loadRecord(entity);
    	this.getFormPanel().resumeEvents();
    },
    
    createFormEditor:function(){
    	view = this.getView(this.views[1]);
		this.formView =Ext.create(view,{
			modal: true,
			renderTo: Ext.getBody(),
		});
		this.formView.show();
    },
    
    onSave:function(){
    	var store = Ext.StoreManager.lookup(this.config.storeId);
    	var form = this.getFormPanel();
    	var entity = form.getForm().getRecord();
    	entity.beginEdit();
    	entity.set(form.getForm().getValues());
    	entity.endEdit();
    	if(entity.get('id') == null){
    		store.add(entity);
    	}
    	
    	store.sync({
			scope:this,
			success:function(batch,request){
				/*if(request.operations.create){
					this.application.fireEvent('notifyUser',{
    					msg:Application.i18n.data_save_success_message
    				});	
				}else if(request.operations.update){
					this.application.fireEvent('notifyUser',{
						msg:Application.i18n.data_save_success_message
    				});
				}*/
				this.fireEvent('afterSave');
			},
			failure:function(batch){
				if(batch.exceptions[batch.current].error.status == 400){
					store.rejectChanges();
					var responseError = Ext.JSON.decode(this.application.currentXhr.responseText);
					form.getForm().markInvalid(responseError.errors);
					form.getForm().fireEvent('validitychange',form,false);//TODO fazer override disso
				}
			}
		});
    }
});