var scorepleaseApp = angular.module('scorepleaseApp', ['ngResource']);

scorepleaseApp.controller('spCtrl', function ($scope, $resource){
  
  $scope.searchAndDisplay = function(){
    $scope.query = $resource('http://api.football-api.com/2.0/competitions/:id',
        {id: '1204', Authorization:'secret_key', callback:'JSON_CALLBACK'},{get: {method: 'JSONP'}});

    var results = $scope.query.get();
    if(results.error)
      alert("error");
    else{
      $scope.comp = results;
    }
  };
    
});
