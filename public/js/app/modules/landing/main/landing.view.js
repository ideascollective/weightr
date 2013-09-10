define(
  [
    'jquery',
    'postal',
    'backbone',
    'underscore',
    'base.view'
  ],

  function($, Postal, Backbone, _, BaseView) {
    'use strict';

    var LandingView = BaseView.extend({
      template: 'mainlayout.hbs',
      el: '.wrapper'
    });

    return LandingView;
});