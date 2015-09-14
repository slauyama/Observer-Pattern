define(function(require) {
    'use strict';

    var Observer = Backbone.Model.extend({
        // Public Methods
        // --------------
        update: function() {
            throw new Error('Please Define a Proper Update')
        }
    });

    return Observer;
});