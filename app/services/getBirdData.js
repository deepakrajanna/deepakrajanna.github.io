deepakBirdsServices.factory('getBirdData', ['$resource',
  function($resource){
    
    return $resource('https://spreadsheets.google.com/feeds/list/1L5o32HKc4lco9aVsO_CWSOzXcQlmRu239qfYg8_CCHM/od6/public/values?alt=json', {}, {
      query: {method:'GET', isArray:false}
    });	
    
    
    
  }]);