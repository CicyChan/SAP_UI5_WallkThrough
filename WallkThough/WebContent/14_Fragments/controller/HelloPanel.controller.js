sap.ui.define([ "sap/ui/core/mvc/Controller",
                "sap/m/MessageToast",
               
               ], function(Controller, MessageToast){
			    "use strict";
			    return Controller.extend("BootStrap.Fragment.controller.HelloPanel",{
			    	OnShowMessage : function (){
						//read message from Model
						var oBundle = this.getView().getModel('i18n').getResourceBundle();
						var sReceipt = this.getView().getModel().getProperty("/receipt/name");
						var sMessage = oBundle.getText("helloMsg", sReceipt);
						
						MessageToast.show(sMessage);
						
					},
					_getDialog : function(){
			    		if(!this._oDialog){
			    			this._oDialog = sap.ui.xmlfragment("BootStrap.Fragment.View.HelloDialog", this);
			    			this.getView().addDependent(this._oDialog);
			    		}
			    		
			    		return this._oDialog;
			    	},
			    	onOpenDialog : function(){
			    		this._getDialog().open();
			    	},
			    	
			    	onCloseDialog : function(){
			    		this._getDialog().close();
			    	}
					
			    });
});