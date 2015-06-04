deepakBirdsControllers.controller('LocationPageCtrl', ['$scope', '$http', '$rootScope','$routeParams', 'getBirdData', 'getFamilyData',
function($scope, $http, $rootScope, $routeParams, getBirdData, getFamilyData) {

	
	var location_name = $routeParams.locationName;
	console.log(location_name);

	$scope.locationName = location_name;
	
	getBirdData.query(function(data) {
		var birds = data.feed.entry;
		
		$scope.birds = [];
		
		for (bird in birds){
			if(birds[bird]['gsx$place']['$t']==location_name){
				$scope.birds.push(birds[bird]);
			}
		}
		$scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
			console.log("I am here locationpage");
			new CBPGridGallery(document.getElementById('grid-gallery'));
		});
	});
}]);
