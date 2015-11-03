angular.module('PortfolioCTRL', []).controller('PortfolioController', function($scope, $location, $window) {
	
	$scope.HelloWorld = function(){
		alert("Portfolio Controller is working!");
	};

	$scope.projects = [
		{
			name: "Circle Game",
			image: "",
			tagline: "",
			description: ""

		},
		
		{
			name: "Workout App C#"
			image: "",
			tagline: "",
			description: ""
		},

		{
			name: "Workout App Angular"
			image: "",
			tagline: "",
			description: ""
		}
	];
	

});