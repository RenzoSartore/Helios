angular
  .module('myApp')
  .directive('done', function() {
      return {
          restrict: 'AECM',
          templateUrl: 'taskDone.html'
      };
  });
