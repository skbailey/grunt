
require.config({
  paths: {
    jquery: "https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min",
    underscore: "http://underscorejs.org/underscore",
    backbone: "http://backbonejs.org/backbone",
    handlebars: "https://github.com/downloads/wycats/handlebars.js/handlebars-1.0.rc.1",
    templates: "templates"
  },
  shim: {
    jquery: {
      exports: "$"
    },
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ["underscore"],
      exports: "Backbone"
    },
    handlebars: {
      exports: "Handlebars"
    },
    templates: ["handlebars"]
  }
});

require(["jquery", "backbone", "handlebars", "templates"], function($, Backbone, Handlebars) {
  return $(function() {
    return $("#main").html(window.JST["first.handlebars"]({
      title: "My Little Pony",
      content: "Booya!",
      days: ["monday", "tuesday", "wednesday"]
    }));
  });
});
