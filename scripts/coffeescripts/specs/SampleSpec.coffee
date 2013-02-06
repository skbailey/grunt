define ["../models/sample"], (SampleModel) =>

  describe "Sample Model", ->
  
    beforeEach ->
      @sampleModel = new SampleModel
       
    it "should have a default value for dessert", ->
      expect(@sampleModel.get("dessert")).toEqual "Pineapple/Coconut Ice Cream"
    