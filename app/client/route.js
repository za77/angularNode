var app = angular.module("app", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/main/main.htm"
    })
    .when("/red", {
        templateUrl : "views/main/red.htm"
    })
    .when("/green", {
        templateUrl : "views/main/green.htm"
    })
    .when("/blue", {
        templateUrl : "views/main/blue.htm"
    });
});
