Ext.define('Application.framework.SearchBehaviour', {
	
	config:{},
	
	init: function(){
        this.addEvents({
            "search" : true
        });
        
        Ext.applyIf(this.config,{
         	searchFormId : '#'+this.config.mainViewAlias +'-search-form'
         });
        
        var controlObject = {};
        controlObject[this.config.mainViewAlias]={
        		search:function(form){
        			this.fireEvent('search',this.getSearchForm().getForm().getValues());
        		}
        };
        
        this.addEventDelatation('reset',this.config.mainViewAlias);
        
        this.addRef({
        	ref:'searchForm',
        	selector:this.config.searchFormId
        });
        
        
        this.control(controlObject);
        this.on('reset',this.onReset,this);
        //this.fireEvent('searchInitialized',Ext.ComponentQuery.query(this.config.searchFormId)[0]);
    },
    
    onReset:function(){
    	this.getSearchForm().reset();
		Ext.ComponentQuery.query('field',form)[0].focus();
    }
	

});