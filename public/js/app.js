angular.module('portfolio', ['ngRoute', 'ngAnimate', 'appRoutes', 'PortfolioCTRL', 'ProjectDisplayCTRL'])

.run(function($rootScope){
	
	$rootScope.gridDisplay = true;

	$rootScope.current = 0;

	$rootScope.projects = [
		{
			id: 0,
			name: "Avoid The Circles",
			image: "img/AvoidTheCirclesSnapshot.JPG",
			link: "link",
			tech: ["HTML", "CSS", "Javascript", "jQuery"],
			tagline: "A simple browser game using jQuery.",
			description: "Keep your mouse pointer away from the growing number of circles generated through Javascript, but don't leave the gaming field or it's game over. Complete with a timer and high score list.",
			github: "https://github.com/nbsteuv/AvoidTheCircles"
		},
		
		{
			id: 1,
			name: "Workout App in C# and .NET",
			image: "img/CSharpWorkoutAppSnapshot.JPG",
			link: "link",
			tech: ["C#", ".NET Framework", "WPF", "Visual Studio"],
			tagline: "An application for storing weightlifting data.",
			description: "This .NET application allows users to input workout data, save it in CSV file format, and retrieve it during future sessions for display within the app.",
			github: "https://github.com/nbsteuv/WorkoutApplicationCSharpWPF"
		},

		{
			id: 2,
			name: "MEAN Stack Workout App",
			image: "img/AngularWorkoutAppSnapshot.JPG",
			link: "link",
			tech: ["AngularJS", "MongoDB through MongoLab", "Express", "NodeJS", "SHA1 hash encryption through CryptoJS", "AES data encryption through CryptoJS", "User authentication through Passport and Cookie Parser", "Twitter Bootstrap"],
			tagline: "A MEAN Stack application for storing weightlifting data.",
			description: "An online iteration of the C# .NET workout app, this application allows users to create an account with a SHA1-encrypted password and save their AES-encrypted workout data to a MongoLab-hosted Mongo database.",
			github: "https://github.com/nbsteuv/WorkoutAppAngularJS"
		}
	];
});