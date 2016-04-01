'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.register',
  'myApp.welcome'
])
//myApp.home links to home.js

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({
    redirectTo:'/home'
  });
}]);
