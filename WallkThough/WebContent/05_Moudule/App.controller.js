sap.ui.define(["sap/ui/core/mvc/Controller",
               "sap/m/MessageToast"],
		function (Controller, MessageToast) {
			"use strict";
			return Controller.extend("BootStrap.Moudule.App", {
					OnShowMessage : function() {
							//show message
						MessageToast.show('hello Moudule');;
		}
		
	});
});