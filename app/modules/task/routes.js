(function (angular) {

  'use strict';

  angular.module('myApp.task')

  .config(['$routeProvider', function($routeProvider) {

    $routeProvider

    .whenAuthenticated('/tasks', {
      controller: 'allTasksController',
      templateUrl: 'modules/task/views/view-all.html',
      resolve: {
        user: ['Auth', function (Auth) {
          return Auth.$waitForAuth();
        }]
      }
    })

    .whenAuthenticated('/tasks/:id', {
      controller: 'taskController',
      templateUrl: 'modules/task/views/view.html',
      resolve: {
        user: ['Auth', function (Auth) {
          return Auth.$waitForAuth();
        }]
      }
    });
  }]);

})(angular);
