var angular = require('angular');
require('angular-ui-router');
require('./submodule1');
require('./submodule2');

var angularModule = angular.module('app', ['ui.router', 'submodule1', 'submodule2']);

angularModule.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function($locationProvider, $stateProvider, $urlRouterProvider) {
    var homecomponent = {
        name: 'home',
        url: '/',
        component: 'homecomponent',
    };

    $stateProvider.state(homecomponent);
    $urlRouterProvider.otherwise('/');
}]);

require('./homecomponent')(angularModule);

module.exports = angularModule;