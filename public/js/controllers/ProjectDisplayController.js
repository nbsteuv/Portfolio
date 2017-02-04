angular.module('ProjectDisplayCTRL', []).controller('ProjectDisplayController', function($scope, $rootScope, $location, $window, $timeout) {

	$scope.showProjectData = false;

	function displayDelay(){
		$timeout(function(){
			$scope.showProjectData = true;
		}, 2000);
	};

	displayDelay();

	function hideGrid(){
		$rootScope.gridDisplay = false;
	}

	hideGrid()

	$scope.currentProject = $rootScope.projects.filter(function(project){
		return project.id == $rootScope.current;
	})[0];

});
