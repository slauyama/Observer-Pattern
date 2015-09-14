define(function(require) {
    'use strict';

    var Observer = require('model/observer');

    var ConcreteObserver = Observer.extend({
        // Marionette Properties
        defaults: {
            subject: null,
            data: ''
        },

        // Marionette Methods
        // ------------------
        initialize: function(attributes) {
            debugger
        },

        // Public Methods
        // --------------
        subscribe: function() {
            this.model.get('subject').addObserver(this)
        },

        unsubscribe: function() {
            this.model.get('subject').removeObserver(this)
        },

        // Need to define update method
        update: function(data) {
            this.model.set('data', data)
        }
    });

    return ConcreteObserver;
});