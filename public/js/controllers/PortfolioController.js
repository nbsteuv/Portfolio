angular.module('PortfolioCTRL', []).controller('PortfolioController', function($scope, $rootScope, $location, $window) {

	$scope.currentProject = $rootScope.projects[$rootScope.current];

	$scope.projectsGrid = $rootScope.projects;
	
	function viewProject(project){
		$rootScope.current = project;

		alert($rootScope.current);
	};

	$scope.viewProject = viewProject;



});