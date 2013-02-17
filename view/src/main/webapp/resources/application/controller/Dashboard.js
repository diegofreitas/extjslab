Ext.define('Application.controller.Dashboard', {
    extend: 'Ext.app.Controller',
    
    mixins:{
		module:'Application.framework.ModuleBehaviour'
    },
    
    views:["Dashboard"],
    
    config:{
    	/**
    	 * selector for the main view of the module.
    	 */
		mainViewAlias:'dashboard'
	},
    
	/**
	 * The init function where events are configured and the mixins are initialized
	 * Since the init method is already defined, the mixins init methods aren't copied
	 * and we need call them manually.
	 */
    init: function() {
    	Novandi.initMixins(this);
    	this.callParent(arguments);
    }
 
  
});