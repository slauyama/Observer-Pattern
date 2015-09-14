define(function(require) {
    'use strict';

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
            'click @ui.unsubscribeButton': '_onClickUnsubscribe',
            'click @ui.subscribeButton': '_onClickSubscribe'
        },

        modelEvents: {
            'change:data': 'render',
            'change:subscribed': '_onChangeSubscribed'
        },

        // Private Methods
        // -------------------
        _onClickUnsubscribe: function() {
            this.model.set('subscribed', false);
        },

        _onClickSubscribe: function() {
            this.model.set('subscribed', true);
        },

        _onChangeSubscribed: function(model, isSubscribed) {
            this.ui.subscribeButton.toggleClass('active', isSubscribed);
            this.ui.unsubscribeButton.toggleClass('active', !isSubscribed);
        }

    });

    return ObserverView;
});