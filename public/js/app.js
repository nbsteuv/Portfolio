angular.module('portfolio', ['ngRoute', 'ngAnimate', 'appRoutes', 'PortfolioCTRL', 'ProjectDisplayCTRL'])

.run(function($rootScope){
	
	$rootScope.gridDisplay = true;

	$rootScope.current = 1;

	$rootScope.projects = [
		{
			id: 0,
			name: "Avoid The Circles",
			image: "img/AvoidTheCirclesSnapshot.JPG",
			link: "link",
			tech: "Tech used",
			tagline: "A simple browser game using jQuery.",
			description: "Description here.",
			github: "https://github.com/nbsteuv/AvoidTheCircles"
		},
		
		{
			id: 1,
			name: "Workout App in C# and .NET",
			image: "img/CSharpWorkoutAppSnapshot.JPG",
			link: "link",
			tech: "Tech used",
			tagline: "An application for storing weightlifting data.",
			description: "Description here.",
			github: "https://github.com/nbsteuv/WorkoutApplicationCSharpWPF"
		},

		{
			id: 2,
			name: "MEAN Stack Workout App",
			image: "img/AngularWorkoutAppSnapshot.JPG",
			link: "link",
			tech: "Tech used",
			tagline: "A MEAN Stack application for storing weightlifting data.",
			description: "Description here.",
			github: "https://github.com/nbsteuv/WorkoutAppAngularJS"
		}
	];
});