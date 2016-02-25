sap.ui.define(["sap/ui/core/mvc/Controller",
               "sap/m/MessageToast"],
               function(Controller, MessageToast){
				"user strict";
				return Controller.extend(("BootStrap.Component.controller.App"),{
					OnShowMessage : function (){
						//read message from Model
						var oBundle = this.getView().getModel('i18n').getResourceBundle();
						var sReceipt = this.getView().getModel().getProperty("/receipt/name");
						var sMessage = oBundle.getText("helloMsg", sReceipt);
						
						MessageToast.show(sMessage);
						
					}
				});
	
});