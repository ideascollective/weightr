define(
  [
    'jquery',
    'postal',
    './main/landing.view'
  ],

  function($, Postal, LandingView) {
    'use strict';

    var LandingController = {
      load: function(viewManager) {
        viewManager.dispose();

        viewManager.addView('.wrapper', new LandingView({
          channel: Postal.channel('application')
        }));

        viewManager.render();
      }
    };

    return LandingController;
});