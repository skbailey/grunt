require.config
  paths:
    jquery: "https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min"
    underscore: "http://underscorejs.org/underscore"
    backbone: "http://backbonejs.org/backbone"
    templates: "result"
  shim:
    jquery:
      exports: "$"
    underscore:
      exports: "_"     
    backbone:
      deps: ["underscore"]
      exports: "Backbone"   
      
require ["jquery", "backbone", "templates"], ($, Backbone) ->
  $ ->
    $("#main").html window.JST["first.handlebars"] 
      title: "My Little Pony" 
      content: "Booya!"
      days: ["monday", "tuesday", "wednesday"]