deepakBirdsServices.factory('getFamilyData', ['$resource',
  function($resource){
    
    return $resource('https://spreadsheets.google.com/feeds/list/1fnN4aphQGAhCMx5Vg51yOcW2ggeqzzMo4kCc-ZSOAzc/3/public/values?alt=json', {}, {
      query: {method:'GET', isArray:false}
    });	
    
    
  }]);