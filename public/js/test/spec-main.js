var tests = Object.keys(window.__karma__.files).filter(function (file) {
  return /spec\.js$/.test(file);
});

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/www/js',

    paths: {
      'jquery' : 'vendor/jquery/jquery-1.9.1',
      'underscore' : 'vendor/underscore/lodash',
      'backbone' : 'vendor/backbone/backbone',
      'handlebars' : 'vendor/handlebars/handlebars',
      'templateregistry' : 'app/templates',
      'base.view' : 'app/core/base.view',
      'container.view' : './app/core/container.view',
      'helpers': 'app/utils/helpers',
      'postal' : 'vendor/postal/postal'
    },

    shim: {
      'backbone': {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
      },
      'handlebars': {
        exports : 'Handlebars'
      }
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
  });

