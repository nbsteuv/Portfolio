angular.module('portfolio', ['ngRoute', 'ngAnimate', 'appRoutes', 'PortfolioCTRL'])

.run(function($rootScope){
	
	$rootScope.current = 1;

	$rootScope.projects = [
		{
			id: 0,
			name: "Avoid The Circles",
			image: "img/AvoidTheCirclesSnapshot.JPG",
			tagline: "A simple browser game using jQuery.",
			description: "",
			github: "https://github.com/nbsteuv/AvoidTheCircles"
		},
		
		{
			id: 1,
			name: "Workout App in C# and .NET",
			image: "img/CSharpWorkoutAppSnapshot.JPG",
			tagline: "An application for storing weightlifting data.",
			description: "",
			github: "https://github.com/nbsteuv/WorkoutApplicationCSharpWPF"
		},

		{
			id: 2,
			name: "MEAN Stack Workout App",
			image: "img/AngularWorkoutAppSnapshot.JPG",
			tagline: "A MEAN Stack application for storing weightlifting data.",
			description: "",
			github: "https://github.com/nbsteuv/WorkoutAppAngularJS"
		}
	];
});