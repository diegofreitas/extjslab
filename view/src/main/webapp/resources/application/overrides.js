Ext.override(Ext.form.Field, {
  afterRender : function() {            
        if(this.helpText){

            var label = this.labelEl;

            if(label)
            {            	
             	var helpImage = label.createChild({
             			tag: 'img', 
             			src: 'icons/information.png',
             			style: 'margin-bottom: 0px; margin-left: 5px; padding: 0px;'
             		});            	
	                	
                Ext.QuickTips.register({
                    target:  helpImage,
                    title: '',
                    text: this.helpText,
                    enabled: true
                });
            }
          }
          Ext.form.Field.superclass.afterRender.call(this);
  }
});

Ext.apply(Ext.layout.Layout.prototype, {
	originalRenderItem:Ext.layout.Layout.prototype.renderItem,
	renderItem:function(c, position, target) {
		var form = c.up('form');
		if(form && c && !c.rendered && c.isFormField && c.fieldLabel && c.allowBlank === false && form.markRequireds == true ) {
			c.fieldLabel = c.fieldLabel + "<span style=\"color:red\"> * </span>";
		}
		this.originalRenderItem.apply(this, arguments);
	}
});

Ext.override(Ext.form.Field, {
	markAsRequired : function() {
		var isELPrepared = this.getFieldLabel() && this.labelEl; 
		if ( isELPrepared && this.getFieldLabel().indexOf( "<span style=\"color:red\"> * </span>" ) > -1 ) {
			this.labelEl.update( this.getFieldLabel() ) ;
		} else if ( isELPrepared ) {
			this.labelEl.update( this.getFieldLabel() + "<span style=\"color:red\"> * </span>" ) ;
		}
	},

    unmarkAsRequired : function() {
    	if ( this.labelEl ) {
    		this.labelEl.update( this.getFieldLabel().replace( "<span style=\"color:red\"> * </span>", "" ) ) ;
    	}
	}
});

Ext.util.Format.brMoney = function(v) {
	v = Ext.num(v, 0);
	v = (Math.round((v - 0) * 100)) / 100;
	v = (v == Math.floor(v)) ? v + ".00" : ((v * 10 == Math.floor(v * 10)) ? v + "0" : v);
	v = String(v);

	var ps = v.split('.');
	var whole = ps[0];
	var sub = ps[1] ? ','+ ps[1] : ',00';
	var r = /(\d+)(\d{3})/;

	while (r.test(whole)) {
		whole = whole.replace(r, '$1' + '.' + '$2');
	}

	v = whole + sub;
	if (v.charAt(0) == '-') {
		return v.substr(1);
	}
	return v;
};


Ext.override(Ext.form.field.Base, {
	labelAlign:'top'
});

Ext.override(Ext.form.field.Base, {
	afterRender:function(){
		if(this.dependent){
			this.on('change',function(){
				Ext.ComponentQuery.query('#'+this.dependent.fieldId).fireEvent(this.dependent.event);
			},this);
		}
		Ext.form.field.Base.superclass.afterRender.call(this);
	}
});

Ext.override(Ext.form.Panel, {
	bodyPadding:5
});


/*Ext.override(Ext.data.Store, {
	proxy : {
		type : 'rest',
		reader: {
             type: 'json',
             root: 'content',
             totalProperty:'totalElements'
         }
	}
});*/

Ext.override(Ext.form.field.ComboBox, {
	setValue: function(value, doSelect) {
	    var me = this,
	        valueNotFoundText = me.valueNotFoundText,
	        inputEl = me.inputEl,
	        i, len, record,
	        dataObj,
	        matchedRecords = [],
	        displayTplData = [],
	        processedValue = [];
	
	    if (me.store.loading) {
	        // Called while the Store is loading. Ensure it is processed by the onLoad method.
	        me.value = value;
	        me.setHiddenValue(me.value);
	        return me;
	    }
	
	    // This method processes multi-values, so ensure value is an array.
	    value = Ext.Array.from(value);
	
	    // Loop through values, matching each from the Store, and collecting matched records
	    for (i = 0, len = value.length; i < len; i++) {
	    	record = value[i];
	    	
	    	if(record && record[me.valueField] && !record.isModel){
	        	matchedRecords.push(record);
	            displayTplData.push(record);
	            /*toBeProcessed= {};
	            toBeProcessed[me.valueField] =record.get(me.valueField);
	            toBeProcessed[me.displayField] =record.get(me.displayField);*/
	            processedValue.push(record);
	        }else{
	        	 if (!record || !record.isModel) {
	 	            record = me.findRecordByValue(record);
	 	        }
	 	        
	 	        
	 	        // record found, select it.
	 	        if (record) {
	 	        	matchedRecords.push(record);
	                 displayTplData.push(record.data);
	                 processedValue.push(record.data['id']?record.data:record.get(me.valueField));
	 	        }
	 	        // record was not found, this could happen because
	 	        // store is not loaded or they set a value not in the store
	 	        else {
	                 // If we are allowing insertion of values not represented in the Store, then push the value and
	                 // create a fake record data object to push as a display value for use by the displayTpl
	                 if (!me.forceSelection) {
	                     processedValue.push(value[i]);
	                     dataObj = {};
	                     dataObj[me.displayField] = value[i];
	                     displayTplData.push(dataObj);
	                     // TODO: Add config to create new records on selection of a value that has no match in the Store
	                 }
	                 // Else, if valueNotFoundText is defined, display it, otherwise display nothing for this value
	                 else if (Ext.isDefined(valueNotFoundText)) {
	                     displayTplData.push(valueNotFoundText);
	                 }
	             }
	        	
	        }
	    	
	        
	       
	    }
	
	    // Set the value of this field. If we are multiselecting, then that is an array.
	    me.setHiddenValue(processedValue);
	    me.value = me.multiSelect ? processedValue : processedValue[0];
	    if (!Ext.isDefined(me.value)) {
	        me.value = null;
	    }
	    me.displayTplData = displayTplData; //store for getDisplayValue method
	    me.lastSelection = me.valueModels = matchedRecords;
	
	    if (inputEl && me.emptyText && !Ext.isEmpty(value)) {
	        inputEl.removeCls(me.emptyCls);
	    }
	
	    // Calculate raw value from the collection of Model data
	    me.setRawValue(me.getDisplayValue());
	    me.checkChange();
	
	    if (doSelect !== false) {
	        me.syncSelection();
	    }
	    me.applyEmptyText();
	
	    return me;
	}
});
	
	
	
