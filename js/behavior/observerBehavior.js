define(function(require) {
    'use strict';

    var ObserverBehavior = Marionette.Behavior.extend({
        // Marionette Functions
        // --------------------
        initialize: function() {
            if (_.isUndefined(this.options.update)) {
                throw new Error('Update funciton is not passed in.');
            }
        },

        // Public Functions
        // ----------------
        onUpdate: function(data) {
            this.options.update(data);
        }
    });

    return ObserverBehavior;
})