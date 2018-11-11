deepakBirdsControllers.controller('MapCtrl', ['$scope', '$http', '$rootScope', 'getLocations', '$window',
function($scope, $http, $rootScope, getLocations, $window) {

	var base_url_dev = "http://localhost/bird/";
	var base_url_prod = "http://deepakrajanna.github.io/";

	getLocations.query(function(data) {
		
		$scope.locations = data.feed.entry;
		
		console.log(data.feed.entry[0])

		locations_data = [['Lat', 'Long', 'Name']];
		for ( i = 0; i < $scope.locations.length; i++) {

			element = [parseInt($scope.locations[i]['gsx$lat']['$t']), parseInt($scope.locations[i]['gsx$long']['$t']), $scope.locations[i]['gsx$place']['$t']+'</br>'+$scope.locations[i]['gsx$birdcount']['$t']+' birds'];
			locations_data.push(element);
		}
	
		console.log(locations_data);

		var data = google.visualization.arrayToDataTable(locations_data);

		var options = {
			showTip : true,
			'enableScrollWheel' : true,
			'mapType' : 'terrain'
		};

		var map = new google.visualization.Map(document.getElementById('chart_div'));

		map.draw(data, options);

	});
	
	$scope.changeToHomepage = function(){
		$window.location.reload();
		window.open(base_url_prod,"_self");
	}
	
	
	

}]);
