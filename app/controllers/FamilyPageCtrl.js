deepakBirdsControllers.controller('FamilyPageCtrl', ['$scope', '$http', '$rootScope','$routeParams', 'getBirdData', 'getFamilyData', '$window', 
function($scope, $http, $rootScope, $routeParams, getBirdData, getFamilyData, $window) {

	var base_url_dev = "http://localhost/deepak-bhaiya-birds/";
	var base_url_prod = "http://deepakrajanna.github.io/";
	
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
			new CBPGridGallery_slideshow(document.getElementById('grid-gallery'));
		});
	});
	
	$scope.changeToHomepage = function(){
		$window.location.reload();
		window.open(base_url_prod,"_self");
	}
	
	
	

}]);
