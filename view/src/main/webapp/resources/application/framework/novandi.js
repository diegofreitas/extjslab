Ext.ns("Novandi");

Novandi.initMixins = function(controller){
	var mixins = controller.mixins;
	for(var mixin in mixins){
		if(mixins[mixin].init){
			mixins[mixin].init.call(controller);
		}
	}
};

//TODO implementar Novandi.hitch