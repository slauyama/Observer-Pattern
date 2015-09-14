define(function(require) {
    'use strict';

    var SubjectBehavior = require('behavior/subjectBehavior');
    var SubjectTemplate = require('text!template/subject.html');

    var SubjectView = Marionette.ItemView.extend({
        // Marionette Properties
        // ---------------------
        className: 'panel panel-primary',

        template: _.template(SubjectTemplate),

        behaviors: {
            Subject: {
                behaviorClass: SubjectBehavior
            }
        },

        ui: {
            notifyObserversButton: '[data-ui=notify-observers-button]'
        },

        events: {
            'click @ui.notifyObserversButton': '_onClickNotifyObserversButton'
        },

        // Public Functions
        // ----------------
        addObserver: function(observer) {
            this.triggerMethod('addObserver', observer);
        },

        removeObserver: function(observer) {
            this.triggerMethod('removeObserver', observer);
        },

        // Private Functions
        // -----------------
        _onClickNotifyObserversButton: function() {
            this.triggerMethod('setChanged');
            this.triggerMethod('notifyObservers');
        }
    });

    return SubjectView
});