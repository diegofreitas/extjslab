Ext.define('Application.framework.ViewFactory', {
	
	
	statics:{
		
		i18n:{
			deleteButtonText:'Remover'
		},

    	createDeleteButton:function(view){
    		return {
				id : view.id + '-delete',
				text : 'Remover(DEL)',
				//scale: 'large',
				//icon : 'sysicons/Application-Form-Delete.png',
				disabled : true,
				handler : function() {
					view.fireEvent('deleteItems');
				}
			};
    	},
    	
    	createNewButton:function(view){
    		return {
    			id: view.id + '-new',
				text : 'Novo(F2)',
				//scale: 'large',
				//icon : 'sysicons/Application-Form-Add.png',
				handler : function() {
					view.fireEvent('new');
				}
			};
    	},
    	
    	createEditButton:function(view){
    		return {
    			id: view.id + '-edit',
				text : 'Editar(F3)',
				//scale: 'large',
				//icon : 'sysicons/Application-Form-Edit.png',
				disabled : true,
				handler : function() {
					view.fireEvent('edit');
				}
			};
    	},
    	
    	createSaveButton:function(view){
    		return {
			        text: 'Salvar(F2)',
   			        id: view.id+'-save',
   			        disabled:true,
   			        //scale: 'large',
   			        //tooltip : 'Salva as altera&ccedil;&otilde;es no sistema. Use a tecla (F2) ',
   			        //icon : 'sysicons/Database-Save.png',
   			        handler: function() {
   			        	view.fireEvent('save'); 
   			        }
   			    };
    	},
    	
    	createCancelButton:function(view){
    		return {
			        text: 'Cancelar(ESC)',
   			        id: view.id+'-cancel',
	   			    // scale: 'large',
	 				//icon : 'sysicons/Arrow-Undo.png',
   			        handler: function() {
   			        	view.fireEvent('cancel'); 
   			        }
   			    };
    	},
    	
    	createCopyButton:function(view){
    		return {
    			id: view.id + '-copy',
				text : 'Copiar(F4)',
				disabled : true,
				//scale: 'large',
				//icon : 'sysicons/Page-Copy.png',
				handler : function() {
					view.fireEvent('copy');
				}
			};
    	},
    	
    	createEditGrid:function(view,storeClass,gridColumns,searchFormFields){
    		return {
    			id:view.id+'-gridpanel',
    			title:'Lista de Funcionarios',
    			xtype : 'gridpanel',
    			selModel : Ext.create('Ext.selection.CheckboxModel'),
    			plugins: [
    			          Ext.create('Ext.grid.plugin.RowEditing', {
    			              clicksToEdit: 2,
    			              pluginId: view.id+'-roweditor'
    			          })
    			      ],
    			store: storeClass,
    			columns : gridColumns,
    			dockedItems : [{
    				xtype : 'toolbar',
    				items : [
							Application.framework.ViewFactory.createNewButton(view),
							'-',
							Application.framework.ViewFactory.createEditButton(view),
							'-',
							Application.framework.ViewFactory.createDeleteButton(view),
							'-',
							Application.framework.ViewFactory.createCopyButton(view),
							'->',
    				         Application.framework.ViewFactory.createSimpleSearchForm(view)
    						]
    			},
    			{
    		        xtype: 'pagingtoolbar',
    		        dock: 'bottom',
    		        store: storeClass,
    		        displayInfo: true
    		    }]
    		};
    	},
    	
    	createSearchButton:function(view){
    		return {
		        text: 'Pesquisar(F6)',
		        formBind: true, //only enabled once the form is valid
		        /*scale: 'large',
				icon : 'sysicons/Find.png',*/
		        handler: function() {
		            var form = view.down('form').getForm();
		            if (form.isValid()) {
		            	view.fireEvent('search');
		            }
		        }
		    };
    	},
    	
    	createResetButton:function(view){
    		return {
		        text: 'Limpar(Backspace)',
		        /*scale: 'large',
				icon : 'sysicons/Draw-Eraser.png',*/
		        handler: function() {
		        	view.down('form').getForm().reset();
		        }
			};
    	}
    	
	}
});