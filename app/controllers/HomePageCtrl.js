deepakBirdsControllers.controller('HomePageCtrl', ['$scope', '$http', '$rootScope', 'getBirdData', 'getFamilyData', 'getLocations','$route',
function($scope, $http, $rootScope, getBirdData, getFamilyData, getLocations, $route) {

	getFamilyData.query(function(data) {
		$scope.families = data.feed.entry;
		getLocations.query(function(data) {
			$scope.locations = data.feed.entry;
			$scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
				console.log("I am here homepage");
				new CBPGridGallery(document.getElementById('grid-gallery'));
			});
		});
	});
}]);
