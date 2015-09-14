define(function(require) {
    'use strict';

    var ConcreteObserver = require('model/concreteObserver');

    var ConcreteObservers = Backbone.Collection.extend({
        model: ConcreteObserver,

        // Marionette Methods
        // ------------------
        initialize: function(observers, options) {
            debugger;
            if (_.isObject(options.subject)) {
                _.each(observers, function(observer) {
                    observer.subject = options.subject;
                });
            }
        }
    });

    return ConcreteObservers;
});