'use strict';

var angular = require('angular');
require('angular-ui-router');
require('./component1');
require('./component2');

var submodule1 = angular.module('submodule1', ['ui.router']);

submodule1.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function($locationProvider, $stateProvider, $urlRouterProvider) {
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

    $stateProvider.state(submodule1component1);
    $stateProvider.state(submodule1component2);

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);