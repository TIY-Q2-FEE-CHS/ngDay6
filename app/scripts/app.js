'use strict';

angular
  .module('ngDay6App', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngDay6App.directives'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  angular.module('ngDay6App.directives', []);
