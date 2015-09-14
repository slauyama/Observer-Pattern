define(function(require) {
    'use strict';

    var MainView = require('view/mainView');

    var Application = Marionette.Application.extend({

        onStart: function() {
            this._showMainArea();
        },

        _showMainArea: function() {
            var mainView = new MainView();
            mainView.render();
        }
    });

    return Application;
});