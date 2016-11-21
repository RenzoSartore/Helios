angular
  .module('myApp')
  .directive('today', function() {
      return {
          restrict: 'AECM',
          templateUrl: 'taskToday.html'
      };
  });
