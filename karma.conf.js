// Karma configuration
// Generated on Thu Apr 04 2013 17:58:40 GMT-0300 (ART)


// base path, that will be used to resolve files and exclude
basePath = '';

// list of files / patterns to load in the browser
files = [
  JASMINE,
  JASMINE_ADAPTER,
  REQUIRE,
  REQUIRE_ADAPTER,

  { pattern: 'public/js/vendor/jquery/jquery-1.9.1.js', included: false },
  { pattern: 'public/js/vendor/require/require.js', included: false },
  { pattern: 'public/js/vendor/underscore/lodash.js', included: false },
  { pattern: 'public/js/vendor/backbone/backbone.js', included: false },
  { pattern: 'public/js/vendor/handlebars/handlebars.js', included: false },
  { pattern: 'public/js/vendor/postal/postal.js', included: false },
  { pattern: 'public/js/vendor/modernizr/modernizr.js', included: false },
  { pattern: 'public/js/app/utils/debug.js', included: true },
  { pattern: 'public/js/app/**/*.js', included: false },

  { pattern: 'public/js/test/specs/**/*.spec.js', included: false},

  'public/js/test/spec-main.js'
];


// list of files to exclude
exclude = [
  'www/js/main.js'
];


// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['progress'];


// web server port
port = 9876;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['Chrome'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;
