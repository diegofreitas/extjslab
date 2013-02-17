Ext.define('Application.framework.ModuleBehaviour', {

	onLaunch : function(application) {
		this.application = application;
	},

	init : function() {
		this.addEvents({
			"start" : true,
			"afterStart" : true
		});
		this.on('start', this.onStart, this);
	},

	onStart : function() {
		this.application.fireEvent('addView', this.views[0]);
		this.fireEvent('afterStart');
	},

	addEventDelatation : function(event, componentSelector) {
		this.addEvents(event);
		var controlObject = {};
		controlObject[componentSelector] = {};
		controlObject[componentSelector][event] = function() {
			this.fireEvent(event);
		};
		this.control(controlObject);
	}
});