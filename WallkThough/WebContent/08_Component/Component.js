sap.ui.define(["sap/ui/core/UIComponent",
               "sap/ui/model/json/JSONModel",
               "sap/ui/model/resource/ResourceModel"], 
		function(UIComponent, JSONModel, ResourceModel){
			"user strict";
			return UIComponent.extend("BootStrap.Component.Component", {
				metadata :{
					rootView : "BootStrap.Component.View.App"
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
					
					var i18nModel = new ResourceModel({
						bundleName : "BootStrap.Component.i18n.i18n"});
					this.setModel(i18nModel, 'i18n');
					
					
				}
			})
	
});