sap.ui.define([
               "sap/ui/core/mvc/Controller",
               "sap/ui/model/json/JSONModel",
               "BootStrap/Demo/model/formatter",
           	   "sap/ui/model/Filter",
        	   "sap/ui/model/FilterOperator"], function (Controller, JSONModel, formatter, Filter, FilterOperator){
				 "user strict";
				 return Controller.extend("BootStrap.Demo.controller.InvoiceList", {
					 formatter : formatter,
					 onInit : function(){
						 var oViewModel = new JSONModel({
							 currency : "CNY"
						 });
						 
						 this.getView().setModel(oViewModel, "view")
					 },
						onFilterInvoices : function (oEvent) {

							// build filter array
							var aFilter = [];
							var sQuery = oEvent.getParameter("query");
							if (sQuery) {
								aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
							}

							// filter binding
							var oList = this.getView().byId("invoiceList");
							var oBinding = oList.getBinding("items");
							oBinding.filter(aFilter);
						}
				 });
});