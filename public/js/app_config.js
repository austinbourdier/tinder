angular.module('myApp', ['gajus.swing'])
.config(config)

function config($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
};
