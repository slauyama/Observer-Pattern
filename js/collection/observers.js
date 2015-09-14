define(function(require) {
    'use strict';

    var Observer = require('model/observer');

    var Observers = Backbone.Collection.extend({
        model: Observer
    });

    return Observers;
});