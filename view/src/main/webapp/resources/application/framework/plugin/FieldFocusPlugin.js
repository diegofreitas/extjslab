Ext.define('Application.framework.plugin.FieldFocusPlugin', {
	alias : 'plugin.fieldfocusplugin',
	pluginId : 'fieldfocusplugin',

	constructor : function(config) {
		Ext.apply(this, config);
		this.callParent(arguments);
	},

	init : function(cmp) {
		if(this.defaultField){
			this.cmp.on('show',this.focusDefaultField,this);
			this.cmp.on('activate',this.focusDefaultField,this);
		}
	},
	
	focusDefaultField:function(){
		Ext.ComponentQuery.query('#'+this.defaultField)[0].focus(10,true);
	}

});