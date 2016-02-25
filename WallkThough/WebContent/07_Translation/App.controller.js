sap.ui.define(["sap/ui/core/mvc/Controller",
               "sap/m/MessageToast",
               "sap/ui/model/json/JSONModel",
               "sap/ui/model/resource/ResourceModel"],
		function (Controller, MessageToast, JSONModel,ResourceModel) {
			"use strict";
			return Controller.extend("BootStrap.Translation.App", {
					onInit : function (){
						//create data Model 
						var oData = {
								receipt : {
									name : 'JSONModel Example'
								}
						};
						
						// set Data Model 
						var oModel = new JSONModel(oData);
						this.getView().setModel(oModel);
						
						//set i18n Model on View 
						var i18nModel = new ResourceModel({
							bundleName : 'BootStrap.Translation.i18n'
						});
						
						this.getView().setModel(i18nModel, "i18n");
						
						
					},
					
					OnShowMessage : function() {
							//show message
						var oBundle = this.getView().getModel('i18n').getResourceBundle();
						var sReceipt = this.getView().getModel().getProperty("/receipt/name");
						var sMessage = oBundle.getText("helloMsg", sReceipt);
						MessageToast.show(sMessage);;
		}
		
	});
});