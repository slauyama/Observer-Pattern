define(function(require) {
    'use strict';

    var Observers = require('collection/observers')

    var Subject = Backbone.Model.extend({
        // Marionette Properties
        // ---------------------
        defaults: function() {
            return {
                observerCollection: new Observers(),
                // isChanged is a property that signifies 
                // whether the model has been changed or not
                isChanged: false
            };
        },

        // Public Methods
        // --------------
        addObserver: function(observer) {
            this.get('observers').add(observer);
        },

        removeObserver: function(observer) {
            this.get('observers').remove(observer);
        },

        // Only notify the observers to update when the model is changed
        notifyObservers: function() {
            if (this.model.get('isChanged')) {
                var data = new Date();
                this.get('observers').invoke('update', data);
            }
            this.model.set('isChanged', false);
        }
    });

    return Subject;
});