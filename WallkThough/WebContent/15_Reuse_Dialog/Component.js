sap.ui.define(["sap/ui/core/UIComponent",
               "sap/ui/model/json/JSONModel",
               "BootStrap/ReuseDialog/controller/HelloDialog"], 
		function(UIComponent, JSONModel, HelloDialog){
			"user strict";
			return UIComponent.extend("BootStrap.ReuseDialog.Component", {
				metadata :{
					 manifest: "json"
				},
				
				init : function (){
					//call the init function of the parent
					UIComponent.prototype.init.apply(this, arguments)
					
					var oData = {
							receipt : {
								name : 'Component'
							}
					};
					
					var oModel = new JSONModel(oData);
					this.setModel(oModel);
					
					this.helloDialog = new HelloDialog();
					
				}
			})
	
});