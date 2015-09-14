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
            'click @ui.unsubscribeButton': '_onClickUnsubscribe',
            'click @ui.subscribeButton': '_onClickSubscribe'
        },

        modelEvents: {
            'change:subscribed': '_onChangeSubscribed'
        },

        // Private Properties
        // ------------------
        _subject: null,

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

            this._subject = this.options.subject;
        },

        onRender: function() {
            this.model.set('subscribed', true);
        },

        // Private Functions
        // -----------------
        _update: function(newDate) {
            this.ui.timeLocation.text(newDate);
        },

        _onChangeSubscribed: function(model, isSubscibed) {
            this.ui.subscribeButton.toggleClass('active', isSubscibed)
            this.ui.unsubscribeButton.toggleClass('active', !isSubscibed)

            if (isSubscibed) {
                this._subject.addObserver(this);
            } else {
                this._subject.removeObserver(this);
            }
        },

        _onClickSubscribe: function() {
            this.model.set('subscribed', true);

        },

        _onClickUnsubscribe: function() {
            this.model.set('subscribed', false);
        }
    });

    return ObserverView;
});