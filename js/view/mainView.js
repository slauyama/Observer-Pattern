define(function(require) {
    'use strict';

    var ObserverView = require('view/observerView');
    var ObserversView = require('view/observersView');
    var SubjectView = require('view/subjectView');
    var MainTemplate = require('text!template/main.html');

    var MainView = Marionette.LayoutView.extend({
        // Marionette Properties
        // ---------------------
        el: 'body',

        template: _.template(MainTemplate),

        regions: {
            subjectRegion: '[data-region=subject-region]',
            observerRegion: '[data-region=observer-region]',
            observersRegion: '[data-region=observers-region]'
        },

        // Marionette Functions
        // --------------------
        initialize: function() {
            this._createViews();
        },

        onRender: function() {
            this._showSubject();
            this._showObserver();
            this._showObservers();
        },

        // Private Functions
        // -----------------
        _createViews: function() {
            this.subjectView = new SubjectView();

            this.observerView = new ObserverView({
                model: new Backbone.Model({
                    id: 1,
                    subscribed: null
                }),
                subject: this.subjectView
            });

            this.observersView = new ObserversView({
                collection: new Backbone.Collection([{
                    id: 1,
                    subscribed: null
                }, {
                    id: 2,
                    subscribed: null
                }]),

                subject: this.subjectView
            });
        },

        _showSubject: function() {
            this.showChildView('subjectRegion', this.subjectView);
        },

        _showObserver: function() {
            this.showChildView('observerRegion', this.observerView);
        },

        _showObservers: function() {
            this.showChildView('observersRegion', this.observersView);
        }
    });

    return MainView;
})