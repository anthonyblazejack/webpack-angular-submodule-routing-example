'use strict';

require('angular');

var submodule2 = angular.module('submodule2');

submodule2.component('submodule2component2', {
    template: '<h1>Submodule 2 Component 2</h1>',
    controller: function() {
        console.log('Submodule 2 Component 2');
    }
});