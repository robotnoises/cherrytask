(function (angular) {

  'use strict';
  
  angular.module('cherry')

  .directive('appVersion', ['version', function(version) {
    return function(scope, elm) {
      elm.text(version);
    };
  }]);

})(angular);
