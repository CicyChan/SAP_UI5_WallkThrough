sap.ui.define(["sap/ui/core/UIComponent",
               "sap/ui/model/json/JSONModel"], 
		function(UIComponent, JSONModel, ResourceModel){
			"user strict";
			return UIComponent.extend("BootStrap.Page.Component", {
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
					
					
				}
			})
	
});