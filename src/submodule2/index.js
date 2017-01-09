'use strict';

var angular = require('angular');
require('angular-ui-router');
require('./component1');
require('./component2');

var submodule2 = angular.module('submodule2', ['ui.router']);

submodule2.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function($locationProvider, $stateProvider, $urlRouterProvider) {
    var submodule2Component1State = {
        name: 'submodule2component1',
        url: '/submodule2component1',
        component: 'submodule2component1',
    };

    var submodule2Component2State = {
        name: 'submodule2component2',
        url: '/submodule2component2',
        component: 'submodule2component2',
    };

    $stateProvider.state(submodule2component1);
    $stateProvider.state(submodule2component2);

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);