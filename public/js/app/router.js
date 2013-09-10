define(
  [
    'backbone',
    'postal',
    'container.view',
    './modules/landing/landing.controller'
  ],

  function(Backbone, Postal, ContainerView, LandingController) {
    'use strict';

    var AppRouter = Backbone.Router.extend({

      routes : {
        'index': 'loadIndex',
        '*path' : 'defaultAction'
      },

      viewManager: new ContainerView({
        el: 'body',
        template: '<section class="wrapper"></section>'
      }),

      initialize: function() {
        Postal.channel('application').subscribe('navigate', _.bind(this.onNavigate, this));

        Backbone.history.start();
      },

      onNavigate: function(route) {
        if (route in this.routes) {
          this.navigate(route, true);
        }
      },

      loadIndex: function() {
        LandingController.load(this.viewManager);
      },

      defaultAction: function() {
        this.navigate('index', true);
      }
    });

    return AppRouter;
  }
);