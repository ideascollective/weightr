define(
  [
    'underscore',
    'backbone',
    'templateregistry',
    'i18next'
  ],
  function(_, Backbone, TemplateRegistry, i18next) {
    'use strict';

    var BaseView = Backbone.View.extend({

      channel: null,

      subscriptions: [],

      initialize: function() {
        if (!this.template &&
          (!this.options.template || !_.isString(this.options.template))) {
          throw new Error('All views must specify their template at creation');
        } else {
          this.template = this.template ? this.template : this.options.template;
        }
        this.channel = this.options.channel;

        _.bindAll(this, 'render', 'afterRender');
        var _this = this;
        this.render = _.wrap(this.render, function(render) {
          _this.beforeRender();
          render();
          _this.afterRender();
          return _this;
        });
      },

      render: function() {
        var data = this.options.data,
            templateFunction;

        if (this.model) {
          data = this.model.toJSON();
        }

        if (this.template in TemplateRegistry) {
          templateFunction = TemplateRegistry[this.template];
          this.$el.html(templateFunction(data));
        } else {
          this.$el.html(this.template);
        }
      },

      load: function() {
        if (this.model) {
          this.loadRender();
          this.model
            .fetch()
            .done(_.bind(this.render, this))
            .fail(_.bind(this.errorHandler, this));
          } else {
            this.render();
          }
      },

      loadRender: function() {
        this.$el.html('<div class="loading"><p>Loading view..</p><div>');
      },

      defaultAction: function() {
        this.render();
      },

      errorHandler: function() {},

      beforeRender: function() {},

      afterRender: function() {},

      subscribe: function(topic, callback) {
        var subscription = this.channel.subscribe(topic, callback);
        this.subscriptions.push(subscription);
      },

      publish: function(topic, data) {
        this.channel.publish(topic, data);
      },

      unsubscribeAll: function() {
        _.each(this.subscriptions, function(subscription) {
          subscription.unsubscribe();
        });
      },

      dispose: function() {
        this.$el.empty(); //remove from DOM

        if (this.model) {
          this.model.off();
        }

        this.unsubscribeAll();
      }

    });

    return BaseView;
  }
);
