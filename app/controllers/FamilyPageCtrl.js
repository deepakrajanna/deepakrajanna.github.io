deepakBirdsControllers.controller('FamilyPageCtrl', ['$scope', '$http', '$rootScope','$routeParams', 'getBirdData', 'getFamilyData',
function($scope, $http, $rootScope, $routeParams, getBirdData, getFamilyData) {

	
	var family_name = $routeParams.familyName;
	console.log(family_name);

	$scope.familyName = family_name;
	
	getBirdData.query(function(data) {
		var birds = data.feed.entry;
		
		$scope.birds = [];
		
		for (bird in birds){
			if(birds[bird]['gsx$family']['$t']==family_name){
				$scope.birds.push(birds[bird]);
			}
		}
		$scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
			console.log("I am here familypage");
			new CBPGridGallery(document.getElementById('grid-gallery'));
		});
	});
	
	
	

}]);
