sap.ui.define([],function(){
	"use strict";
	return { 
		statusText : function (sStatus){
			var resourceBundel = this.getView().getModel("i18n").getResourceBundle();
			
			switch (sStatus){
				case 'A':
					return resourceBundel.getText("invoiceStatusA");
				case 'B':
					return resourceBundel.getText("invoiceStatusB");
				case 'C':
					return resourceBundel.getText("invoiceStatusC");
				default:
					return sStatus;
			
			}
		}
	};
});