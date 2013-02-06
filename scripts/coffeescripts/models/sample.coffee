define ["jquery", "backbone"], ($, Backbone) ->
  
  class SampleModel extends Backbone.Model
    
    defaults:
      "dessert": "Pineapple/Coconut Ice Cream"