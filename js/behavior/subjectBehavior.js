define(function(require) {
    'use strict';

    var SubjectBehavior = Marionette.Behavior.extend({
        // Private Properties
        // ------------------
        _changed: false,
        _observers: null,

        // Marionette Methods
        // ------------------
        initialize: function() {
            this._observers = [];
        },

        // Public Methods
        // --------------
        onAddObserver: function(observer) {
            this._observers.push(observer);
        },

        onRemoveObserver: function(observer) {
            var index = this._observers.indexOf(observer);
            this._observers.splice(index, 1);
        },

        onNotifyObservers: function() {
            if (this._changed) {
                _.each(this._observers, function(observer) {
                    observer.triggerMethod('update', new Date());
                });

                this._changed = false;
            }
        },

        onSetChanged: function() {
            this._changed = true;
        }
    });

    return SubjectBehavior;
});