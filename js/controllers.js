var scorepleaseApp = angular.module('scorepleaseApp', ['ngResource']);

iamwatchingApp.controller('videoCtrl', function ($scope, $resource){
  
  $scope.searchAndDisplay = function(){
    $scope.query = $resource('http://localhost:5000/vid/api/v1.0/vsearch',
        {q: $scope.searchTerm, callback: 'JSON_CALLBACK'},{get: {method: 'JSONP'}});

    var results = $scope.query.get();
    if(results.error)
      alert("error");
    else{
      $scope.vids = results;
    }
  };
    
});