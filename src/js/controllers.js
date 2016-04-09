app.controller('teaController', ['$scope', 'teadata', function($scope, teadata) {
  $scope.greeting = "Hello World!";
  $scope.data = teadata;
  
  var newArray = [];
  
  teadata.forEach(function( obj ) {
  newArray.push(obj.categories);
  return newArray;
  });

  $scope.categories = newArray.reduce(function(a,b) {
  return a.concat(b)
  }, []).filter(function(a,b,self) {
  return self.indexOf(a) == b 
   });


}]);
