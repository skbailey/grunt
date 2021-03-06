(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["jquery", "backbone"], function($, Backbone) {
    var SampleModel;
    return SampleModel = (function(_super) {

      __extends(SampleModel, _super);

      function SampleModel() {
        return SampleModel.__super__.constructor.apply(this, arguments);
      }

      SampleModel.prototype.defaults = {
        "dessert": "Pineapple/Coconut Ice Cream"
      };

      return SampleModel;

    })(Backbone.Model);
  });

}).call(this);
