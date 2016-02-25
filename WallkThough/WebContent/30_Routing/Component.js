sap.ui.define(["sap/ui/core/UIComponent",
               "sap/ui/model/json/JSONModel",
               "BootStrap/Demo/controller/HelloDialog",
               "sap/ui/model/odata/ODataModel",
               "sap/ui/Device"], 
		function(UIComponent, JSONModel, HelloDialog, ODataModel, Device){
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
					
					//set Device Mode
					var oDeviceMode = new JSONModel(Device);
					oDeviceModel.setDefaultBindingMode("OneWay");
					this.setModel(oDeviceMode,"device");
					
					//disable bach gruping for V2 api for V2 API of the northwind server.
					this.getModel('invoice').setUseBatch(false);
					
					this.helloDialog = new HelloDialog();
					//create the views based on the url/hash
					this.getRouter().initialize();
					
				},
				getContentDensityClass : function() {
					if (!this._sContentDensityClass) {
						if (!sap.ui.Device.support.touch) {
							this._sContentDensityClass = "sapUiSizeCompact";
						} else {
							this._sContentDensityClass = "sapUiSizeCozy";
						}
					}
					return this._sContentDensityClass;
				}
			})
	
});