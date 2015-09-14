define(function(require) {
    'use strict';

    var Observer = require('model/observer');

    var ConcreteObserver = Observer.extend({
        // Marionette Properties
        // ---------------------
        defaults: {
            subject: null,
            subscribed: null,
            data: ''
        },

        // Marionette Methods
        // ------------------
        initialize: function() {
            this.on('change:subscribed', this._onChangeSubscribed);
        },

        // Public Methods
        // --------------
        update: function(data) {
            this.set('data', data)
        },

        // Private Methods
        // ---------------
        _onChangeSubscribed: function(model, isSubscribed) {
            var subject = this.get('subject');
            if (isSubscribed) {
                subject.addObserver(this);
            } else {
                subject.removeObserver(this);
            }
        }
    });

    return ConcreteObserver;
});