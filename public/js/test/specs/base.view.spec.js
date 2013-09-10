define(
  [
    'base.view',
    'postal'
  ],
  function(BaseView, postal) {
    'use strict';

    describe('use of messaging bus', function() {

      var TestView = BaseView.extend({
        template: 'test.hbs',
        eventHandler: function(event) {}
      });

      it('subscribe to a topic in a channel', function() {
        var channel = postal.channel('test'),
          v1 = new TestView({
            channel: channel
          }),
          v2 = new TestView({
            channel: channel
          });

        spyOn(v2, 'eventHandler');

        v2.subscribe('topic1', v2.eventHandler);
        v1.publish('topic1', {});

        expect(v2.eventHandler).toHaveBeenCalled();

      });

    });
  }
);