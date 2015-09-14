define(function(require) {
    'use strict';

    var SubjectTemplate = require('text!template/subject.html');

    var SubjectView = Marionette.ItemView.extend({
        // Marionette Properties
        // ---------------------
        className: 'panel panel-primary',

        template: _.template(SubjectTemplate),

        ui: {
            notifyObserversButton: '[data-ui=notify-observers-button]'
        },

        events: {
            'click @ui.notifyObserversButton': '_onClickNotifyObserversButton'
        },

        // Private Functions
        // -----------------
        _onClickNotifyObserversButton: function() {
            this.model.set('isChanged', true);
            this.model.notifyObservers();
        }
    });

    return SubjectView
});