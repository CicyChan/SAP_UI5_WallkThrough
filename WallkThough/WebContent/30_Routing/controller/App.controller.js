sap.ui.define(["sap/ui/core/mvc/Controller",
               "sap/m/MessageToast"],
               function(Controller, MessageToast){
				"user strict";
				return Controller.extend(("BootStrap.Demo.controller.App"),{
					onInit: function () {
						this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
					},
					onOpenDialog : function(){
						this.getOwnerComponent().helloDialog.open(this.getView());
					}
				});
	
});