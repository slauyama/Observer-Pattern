define(function(require) {
    'use strict';

    var ObserverView = require('view/observerView');
    var ObserversTemplate = require('text!template/observers.html');

    var ObserversView = Marionette.CompositeView.extend({
        // Marionette Properties
        // ---------------------
        className: 'panel panel-default',
        template: _.template(ObserversTemplate),

        childView: ObserverView,
        childViewContainer: '.panel-body',

        // Marionette Methods
        // ------------------
        childViewOptions: function() {
            return {
                subject: this.options.subject
            };
        }
    });

    return ObserversView;
});