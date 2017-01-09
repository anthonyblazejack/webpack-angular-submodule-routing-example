var angular = require('angular');
require('./submodule1');
require('./submodule2')
module.exports = angular.module('app', ['submodule1', 'submodule2']);