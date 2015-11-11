angular.module('PortfolioCTRL', []).controller('PortfolioController', function($scope, $rootScope, $location, $window) {

	$scope.displayGrid = $rootScope.gridDisplay;

	function displayDelay(){
		setTimeout(function(){
			$scope.displayGrid = true;
		}, 2000);
	};

	displayDelay();

	$scope.projectsGrid = $rootScope.projects;
	
	function viewProject(project){
		$rootScope.current = project;
		$location.path("/project-detail");
	};

	$scope.viewProject = viewProject;

});