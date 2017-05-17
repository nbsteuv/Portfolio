angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'PortfolioController'
        })

        .when('/project-detail', {
            templateUrl: 'views/project-detail.html',
            controller: 'ProjectDisplayController'
        })

        .when('/TileGameDemo', {
            templateUrl: 'TileGameDemo/index.html'
        })

        .when('/BreakoutCloneDemo', {
            templateUrl: 'BreakoutCloneDemo/index.html'
        })

        .when('/AvoidTheCircles', {
            templateUrl: 'AvoidTheCircles/index.html'
        });

    $locationProvider.html5Mode(false);

}]);
