deepakBirdsServices.factory('getBirdData', ['$resource',
  function($resource){
    /*return $resource('https://spreadsheets.google.com/feeds/list/1DeWM3-DipzuZL5mvMIxG5w_ORqOwWkOCGpfLQqGS54U/od6/public/values?alt=json', {}, {
      query: {method:'GET', isArray:false}
    });	
    */
    return $resource('https://spreadsheets.google.com/feeds/list/1fnN4aphQGAhCMx5Vg51yOcW2ggeqzzMo4kCc-ZSOAzc/od6/public/values?alt=json', {}, {
      query: {method:'GET', isArray:false}
    });	
    
    
  }]);