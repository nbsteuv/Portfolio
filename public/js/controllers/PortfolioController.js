angular.module('PortfolioCTRL', []).controller('PortfolioController', function($scope, $location, $window) {
	
	$scope.HelloWorld = function(){
		alert("Portfolio Controller is working!");
	};

	$scope.projects = [
		{
			name: "Circle Game",
			image: "img/AvoidTheCirclesSnapshot.JPG",
			tagline: "",
			description: ""
		},
		
		{
			name: "Workout App C#",
			image: "img/CSharpWorkoutAppSnapshot.JPG",
			tagline: "",
			description: ""
		},

		{
			name: "Workout App Angular",
			image: "img/AngularWorkoutAppSnapshot.JPG",
			tagline: "",
			description: ""
		}
	];
	

});