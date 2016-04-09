app.config(function($routeProvider) {
  $routeProvider
    .when('/bag', {
      templateUrl: 'views/bag.html',
      controller: 'bagController'
    })
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'teaController'
    })
    .otherwise('/');
});