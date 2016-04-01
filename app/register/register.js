'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp.register', ['ngRoute', 'firebase'])

//Declared route
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/register', {
    templateUrl: 'register/register.html',
    controller: 'RegisterCtrl'
  });
}])

//Register controller
.controller('RegisterCtrl', ['$scope', '$firebaseAuth', '$location', function($scope, $firebaseAuth, $location) {

  $scope.signUp = function() {
    if(!$scope.regForm.$invalid) {
      var email = $scope.user.email;
      var password = $scope.user.password;
      if(email && password) {
        auth.$createUser({email: email, password: password})
        .then(function() {
          console.log('User creation successful');
          $location.path('/home');
        }, function(error) {
          console.log(error);
          $scope.regError = true;
          $scope.regErrorMessage = error.message;
        });
      }
    }
  };
  var firebaseObj = new Firebase("https://radiant-fire-9518.firebaseio.com/");
  var auth = $firebaseAuth(firebaseObj);
}]);
