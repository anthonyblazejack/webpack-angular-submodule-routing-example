'use strict';

require('angular');

var submodule1 = angular.module('submodule1');

submodule1.component('submodule1component1', {
    template: '<h1>Submodule 1 Component 1</h1>',
    controller: function() {
        console.log('Submodule 1 Component 1');
    }
});