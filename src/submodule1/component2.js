'use strict';

require('angular');

var submodule1 = angular.module('submodule1');

submodule1.component('submodule1component2', {
    template: '<h1>Submodule 1 Component 2</h1>',
    controller: function() {
        console.log('Submodule 1 Component 2');
    }
});