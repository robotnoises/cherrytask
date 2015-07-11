(function (angular) {

  'use strict';

  angular.module('cherry.task')

  .controller('taskController', ['$scope', '$routeParams', 'taskService',
    function ($scope, $routeParams, taskService) {
      var taskId = $routeParams.id;
      taskService.get(taskId, function (task) {
        $scope.task = task;
      });
    }]);

})(angular);