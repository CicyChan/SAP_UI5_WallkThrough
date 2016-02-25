sap.ui.define(["sap/ui/core/mvc/Controller",
               "sap/m/MessageToast",
               "sap/ui/model/json/JSONModel"],
		function (Controller, MessageToast, JSONModel) {
			"use strict";
			return Controller.extend("BootStrap.JSONModel.App", {
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
						
					},
					
					OnShowMessage : function() {
							//show message
						MessageToast.show('hello Moudule');;
		}
		
	});
});