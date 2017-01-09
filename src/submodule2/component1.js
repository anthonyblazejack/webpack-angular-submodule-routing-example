'use strict';

require('angular');

var submodule2 = angular.module('submodule2');

submodule2.component('submodule2component1', {
    template: '<h1>Submodule 2 Component 1</h1>',
    controller: function() {
        console.log('Submodule 2 Component 1');
    }
});