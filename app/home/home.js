'use strict';

angular.module('myApp.home', ['ngRoute', 'firebase'])

//Declared route
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });

}])

//Home controller
.controller('HomeCtrl', ['$scope', '$location', '$firebaseAuth', 'CommonProp', function($scope, $location, $firebaseAuth, CommonProp) {

  $scope.SignIn = function(event) {  //to authenticate user
    event.preventDefault();  //prevents form refresh
    var username = $scope.user.email;
    var password = $scope.user.password;

    loginObj.$authWithPassword({
      email: username,
      password: password
    })
    .then(function(user) {
      console.log("Authentication Successful");
      $location.path('/welcome');
      CommonProp.setUser(user.password.email);
    }, function(error) {
      console.log("Authentication Failure");
    });
  }
  var firebaseObj = new Firebase("https://radiant-fire-9518.firebaseio.com/"); //created a firebase instance
  var loginObj = $firebaseAuth(firebaseObj);  //create firebaseSimpleLogin(module that checks auth) instance

}])

.service('CommonProp', function() {
  var user = " ";
   return {
     getUser: function() {
       return user;
     },
     setUser: function(value) {
       user = value;
     }
   };
});
