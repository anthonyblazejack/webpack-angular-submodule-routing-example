var angular = require('angular');
require('angular-ui-router');

var angularModule = angular.module('submodule2', ['ui.router']);

angularModule.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function($locationProvider, $stateProvider, $urlRouterProvider) {
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

    $stateProvider.state(submodule2Component1State);
    $stateProvider.state(submodule2Component2State);
}]);

require('./component1')(angularModule);
require('./component2')(angularModule);

module.exports = angularModule;