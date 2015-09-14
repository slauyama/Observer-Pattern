define(function(require) {
    'use strict';

    var ConcreteObservers = require('collection/concreteObservers');
    var ConcreteObserver = require('model/concreteObserver');
    var ConcreteSubject = require('model/concreteSubject');
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
            this._createModels();
            this._createViews();
        },

        onRender: function() {
            this._showSubject();
            this._showObserver();
            this._showObservers();
        },

        // Private Functions
        // -----------------
        _createModels: function() {
            this.concreteSubject = new ConcreteSubject()

            this.concreteObserver = new ConcreteObserver({
                subject: this.concreteSubject
            });

            this.concreteObservers = new ConcreteObservers([{
                id: 1,
            }, {
                id: 2,
            }, {
                id: 3,
            }], {
                subject: this.concreteSubject
            })
        },

        _createViews: function() {
            this.subjectView = new SubjectView({
                model: this.concreteSubject
            });

            this.observerView = new ObserverView({
                model: this.concreteObserver
            });

            this.observersView = new ObserversView({
                collection: this.concreteObservers
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