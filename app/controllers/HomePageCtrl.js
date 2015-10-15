deepakBirdsControllers.controller('HomePageCtrl', ['$scope', '$http', '$rootScope', 'getBirdData', 'getFamilyData', 'getLocations','$route','$location','$window',
function($scope, $http, $rootScope, getBirdData, getFamilyData, getLocations, $route, $location, $window) {

	
	
	var base_url_dev = "http://localhost/deepak-bhaiya-birds/";
	var base_url_prod = "http://deepakrajanna.github.io/";
	
	$scope.families_fill = function(){
		getFamilyData.query(function(data) {
			$scope.families = data.feed.entry;
			$scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
				new CBPGridGallery(document.getElementById('grid-gallery'));
			});

		});
	}

	$scope.destinations_fill = function(){
		getLocations.query(function(data) {
			$scope.locations = data.feed.entry;
			$scope.$on('ngRepeatFinisheds', function(ngRepeatFinishedsEvent) {
				new CBPGridGallery2(document.getElementById('grid-gallery-2'));
			});
		});
	}
	
	$scope.changeToFamilyPage = function(family_name){
		$window.location.reload();
		window.open(base_url_prod+'#/family/'+family_name,"_self");
	}
	
	$scope.changeToLocationPage = function(location_name){
		$window.location.reload();
		window.open(base_url_prod+'#/location/'+location_name,"_self");
	}
	
	$scope.changeToHomepage = function(){
		$window.location.reload();
	}
}]);
