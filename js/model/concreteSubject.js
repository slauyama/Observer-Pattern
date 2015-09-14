define(function(require) {
    'use strict';

    var Subject = require('model/subject');

    var ConcreteSubject = Subject.extend({
        defaults: function() {
            var concreteSubjectProperties = {

            }
            return _.extend(concreteSubjectProperties, _.result(Subject.prototype, 'defaults'));
        }
    });

    return ConcreteSubject;
});