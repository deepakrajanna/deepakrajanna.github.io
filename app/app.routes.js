
deepakBirdsApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
    	  redirectTo: '/homepage'
      }).
      when('/homepage', {
        templateUrl: 'app/partials/homepage.html',
        controller: 'HomePageCtrl'
      })
      .when('/family/:familyName', {
		templateUrl : 'app/partials/familypage.html',
		controller : 'FamilyPageCtrl'
	   })
	   .when('/location/:locationName', {
		templateUrl : 'app/partials/locationpage.html',
		controller : 'LocationPageCtrl'
	   })
	   .when('/coverage', {
        templateUrl: 'app/partials/map.html',
        controller: 'MapCtrl'
      });
  }]);
