define(function(require) {
    'use strict';

    var ObserverBehavior = require('behavior/observerBehavior');
    var ObserverTemplate = require('text!template/observer.html');

    var ObserverView = Marionette.ItemView.extend({
        // Marionette Properties
        // ---------------------
        className: 'panel panel-default',
        template: _.template(ObserverTemplate),

        ui: {
            'timeLocation': '[data-ui=time-location]',
            'unsubscribeButton': '[data-ui=unsubscribe-button]',
            'subscribeButton': '[data-ui=subscribe-button]'
        },

        events: {
            // 'click @ui.unsubscribeButton': '_onClickUnsubscribe',
            // 'click @ui.subscribeButton': '_onClickSubscribe'
        },


        // Mariontte Functions
        // -------------------
        behaviors: function() {
            return {
                Observer: {
                    behaviorClass: ObserverBehavior,
                    update: this._update.bind(this)
                }
            };
        },

        initialize: function() {
            if (_.isUndefined(this.options.subject)) {
                throw new Error('subject is not passed in.');
            }
        },

        onRender: function() {},

    });

    return ObserverView;
});