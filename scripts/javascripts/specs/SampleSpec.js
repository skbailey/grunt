(function() {
  var _this = this;

  define(["../models/sample"], function(SampleModel) {
    return describe("Sample Model", function() {
      beforeEach(function() {
        return this.sampleModel = new SampleModel;
      });
      return it("should have a default value for dessert", function() {
        return expect(this.sampleModel.get("dessert")).toEqual("Pineapple/Coconut Ice Cream");
      });
    });
  });

}).call(this);
