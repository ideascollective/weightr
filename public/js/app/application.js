define(
  [
    'jquery',
    './utils/helpers',
    'handlebars',
    './router'
  ],
  function($, Helpers, Handlebars, Router) {
    'use strict';

    var Application = {

      addHandlebarsHelpers: function() {
        debug.info('Loading Handlebars helpers');
        for (var h in Helpers) {
          Handlebars.registerHelper(h, Helpers[h]);
        }
      },

      startRouter: function() {
        debug.groupEnd();
        debug.info('Starting application router');
        new Router();
      },

      runInitCommands: function(endCb) {
        $.when(
          this.addHandlebarsHelpers()
        ).then(endCb);
      },

      start: function() {
        debug.group('Bootstrapping application');
        this.runInitCommands(this.startRouter);
      }

    };

    return Application;
  }
);