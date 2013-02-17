Ext.define('Application.framework.Notification', {
    extend:'Ext.AbstractPlugin',
    alias:'plugin.notification',
    pluginId:'notification',
    
	show:function(_level,_msg){
		this.hide();
		this.cmp.addDocked(Notification.create({
            data:{
            	level:_level,
            	msg:_msg
            },
            plugin:this
        }),0);
	},
	
	hide:function(){
		var notification = this.cmp.getDockedItems('notification')[0];
		if(notification){
			notification.getEl().stopAnimation();
			this.cmp.removeDocked(notification);
		}
	}

});


Ext.define('Notification',{
	extend:'Ext.Component',
	alias:'widget.notification',
	height:40,
	autoEl:{
        tag:'div',
    },
    onRender:function(){
    	this.on('click',this.destroy,this);
    	this.callParent(arguments);
    },
    
    afterRender:function(){
    	var _plugin=this.plugin;
    	this.callParent(arguments);
    	this.getEl().slideIn('t').ghost("t", { delay: 4000, remove: true,callback:function(){
    		_plugin.hide();
    	}});
    },
    
    tpl: Ext.create('Ext.XTemplate','<div class="notification notification-{level}"><div class="notification-icon"></div><div class="notification-message">{msg}</div></div>'),
    statics:{
    	INFO:'info',
    	ALERT:'alert',
    	ERROR:'error'
    }
});