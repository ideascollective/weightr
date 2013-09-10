define(
  [
    'handlebars'
  ],
  function(Handlebars) {
    'use strict';

    var Helpers = {

      /*Given 2 parameters returns true if they are equal,
      * false if they are not.
      */
      ifEq: function(val1, val2, options) {
        if (val1 === val2) {
          return options.fn(this);
        } else {
          return options.inverse(this);
        }
      },

      /*Given 2 parameters returns true if they are not equal,
      * false if they are.
      */
      ifNotEq: function(val1, val2, options) {
        if (val1 !== val2) {
          return options.fn(this);
        } else {
          return options.inverse(this);
        }
      }
    };

    return Helpers;
  }
);