define([], function() {
    'use strict';

    require.config({
        baseUrl: 'js/',

        paths: {
            'backbone': 'bower_components/backbone/backbone',
            'marionette': 'bower_components/marionette/lib/backbone.marionette',
            'jquery': 'bower_components/jquery/dist/jquery',
            'text': 'bower_components/requirejs-text/text',
            'underscore': 'bower_components/underscore/underscore',
        },

        shim: {
            'jquery': {
                exports: '$'
            },

            'underscore': {
                exports: '_'
            }

        },

    });
})