define(function(require) {
    'use strict';

    require('marionette');

    // Finally, load the application which will initialize the foreground:
    require(['application'], function(Application) {

        var application = new Application();

        application.start();
    });
});