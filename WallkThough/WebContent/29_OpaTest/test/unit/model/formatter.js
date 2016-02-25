sap.ui.define(["BootStrap/Demo/model/formatter",
               "sap/ui/model/resource/ResourceModel",
               "sap/ui/thirdparty/sinon",
               "sap/ui/thirdparty/sinon-qunit"],
               function(formatter, ResourceModel){
					"user strict";
					QUnit.module("Formatting funcitons", {
						setup: function () {
							this._oResourceModel = new ResourceModel({
								bundleUrl : jQuery.sap.getModulePath("BootStrap.Demo", "/i18n/i18n.properties")
							});
						},
						teardown: function () {
							this._oResourceModel.destroy();
						}
					});
					
					QUnit.test("Should return the translated texts", function (assert) {
						// Arrange
						var	oViewStub = {
							getModel: this.stub().withArgs("i18n").returns(this._oResourceModel)
						};
						var oControllerStub = {
							getView: this.stub().returns(oViewStub)
						};
						// System under test
						var fnIsolatedFormatter = formatter.statusText.bind(oControllerStub);
						// Assert
						assert.strictEqual(fnIsolatedFormatter("A"), "New", "The long text for status A is correct");
						assert.strictEqual(fnIsolatedFormatter("B"), "In process", "The long text for status B is correct");
						assert.strictEqual(fnIsolatedFormatter("C"), "Done", "The long text for status C is correct");
						assert.strictEqual(fnIsolatedFormatter("Foo"), "Foo", "The long text for status Foo is correct");
					});
	
})