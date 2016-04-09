app.controller('teaController', ['$scope', 'teadata', function($scope, teadata) {
  $scope.greeting = "Hello World!";
  $scope.data = teadata;
  $scope.quantities = [1,2,3,4,5,6,7,8,9,10]
  
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
