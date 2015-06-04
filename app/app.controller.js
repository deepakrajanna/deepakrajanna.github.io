google.load("visualization", "1.1", {packages:["bar","map"]});
			
google.setOnLoadCallback(function() {
	  angular.bootstrap(document.body, ['deepakBirdsApp']);
	});

var deepakBirdsControllers = angular.module('deepakBirdsControllers', []);
var deepakBirdsServices = angular.module('deepakBirdsServices', ['ngResource']);