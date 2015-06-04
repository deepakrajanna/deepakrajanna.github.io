var mapApp = angular.module('mapApp', [
  'mapControllers'
]);

var mapControllers = angular.module('mapControllers', []);

mapApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/coverage', {
        templateUrl: 'app/components/map/partials/map.html',
        controller: 'MapCtrl'
      });
  }]);
