Ext.define('Application.framework.KeyMapSupport', {
	alias : 'plugin.keymapsupport',
	pluginId : 'keymapsupport',

	constructor : function(config) {
		Ext.apply(this, config);
		this.callParent(arguments);
	},

	init : function(cmp) {
		this.cmp.on('afterrender',this.configureKeyboard,this);
	},

	configureKeyboard : function() {

		for ( var i = 0; this.keyBindings.length > i; i++) {
			keyBindingConfig = this.keyBindings[i];

			/*
			 * keyBinding = Ext.apply({ handler : function(){ console.log(
			 * keyBinding); this.fireEvent( keyBinding['event'] ); }, scope:
			 * this }, keyBindingConfig);
			 */

			this.addKeyEvent(keyBindingConfig['key'],
					keyBindingConfig['event'], keyBindingConfig['target'],keyBindingConfig['stop']);
		}
	},

	addKeyEvent : function(key, event, target,stop) {
		if (target) {
			target = Ext.ComponentQuery.query(target)[0];
		} else {
			target = this;
		}
		this.cmp.getKeyMap().addBinding({
			key : key,
			fn : function(keyCode, evt) {
				//evt.preventDefault(); //evita que o brownser execute operacoes associadas a tecla (pesquisar no firefox -> F3)
				this.cmp.fireEvent(event);
			},
			scope : target
		});

	}

});