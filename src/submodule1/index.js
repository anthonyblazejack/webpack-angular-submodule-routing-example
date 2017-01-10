var angular = require('angular');
require('angular-ui-router');

var angularModule = angular.module('submodule1', ['ui.router']);

angularModule.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function($locationProvider, $stateProvider, $urlRouterProvider) {
    var submodule1Component1State = {
        name: 'submodule1component1',
        url: '/submodule1component1',
        component: 'submodule1component1',
    };

    var submodule1Component2State = {
        name: 'submodule1component2',
        url: '/submodule1component2',
        component: 'submodule1component2',
    };

    $stateProvider.state(submodule1Component1State);
    $stateProvider.state(submodule1Component2State);
}]);

require('./component1')(angularModule);
require('./component2')(angularModule);

module.exports = angularModule;