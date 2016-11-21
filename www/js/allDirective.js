angular
  .module('myApp')
  .directive('all', function() {
      return {
          restrict: 'AECM',
          templateUrl: 'taskAll.html'
      };
  });
