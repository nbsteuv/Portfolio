angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'PortfolioController'
        })

        .when('/project-detail', {
            templateUrl: 'views/project-detail.html',
            controller: 'PortfolioController'
        })

        .when('/AvoidTheCircles', {
            templateUrl: 'AvoidTheCircles/index.html'
        });

    $locationProvider.html5Mode(false);

}]);
