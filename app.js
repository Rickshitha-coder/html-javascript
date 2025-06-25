var app = angular.module("app1", ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when("/home.html", {
      templateUrl: "home.html",
      controller: "c1"
    })
    .when("/about.html", {
      templateUrl: "about.html",  
      controller: "c2"
    })
    .when('/user1.html', {
      templateUrl: "user1.html",  
      controller: "c3"
    })
    .otherwise({
      redirectTo: "/home.html"
    });
});

app.controller("c1", function($scope) {
  $scope.display = "Welcome to Home page";
});
app.controller("c2", function($scope) {
  $scope.display = "Welcome to About page";
});
app.controller("c3", function($scope) {
  $scope.display = "Welcome to User page";
});
