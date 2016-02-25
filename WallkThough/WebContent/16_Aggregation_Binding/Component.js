sap.ui.define(["sap/ui/core/UIComponent",
               "sap/ui/model/json/JSONModel",
               "BootStrap/Demo/controller/HelloDialog",
               "sap/ui/model/odata/ODataModel"], 
		function(UIComponent, JSONModel, HelloDialog, ODataModel){
			"user strict";
			return UIComponent.extend("BootStrap.Demo.Component", {
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
					
					
					/**  Local Invoice Json Model 
					//set Invoice Model
					var oConfig    = this.getMetadata().getConfig();
					var sNameSpace = this.getMetadata().getManifestEntry("sap.app").id;
					var oInvoiceModel = new JSONModel(jQuery.sap.getModulePath(sNameSpace, oConfig.invoiceLocal));
					this.setModel(oInvoiceModel, 'invoice')
					 */
					
					/**
					 * Remote oData
					 */
					/*after add the dataSource in the Manefest.json commet this below code 
					//Set oData Model via get the configed data 
					var oConfig = this.getMetadata().getConfig();
					var oInvoiceMode = new ODataModel(oConfig.InvoiceRemote);
					this.setModel(oInvoiceMode, 'invoice');
					*/
					
					//disable bach gruping for V2 api for V2 API of the northwind server.
					this.getModel('invoice').setUseBatch(false);
					
					this.helloDialog = new HelloDialog();
					
				}
			})
	
});