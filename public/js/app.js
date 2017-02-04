angular.module('portfolio', ['ngRoute', 'ngAnimate', 'appRoutes', 'PortfolioCTRL', 'ProjectDisplayCTRL'])

.run(function($rootScope){

	$rootScope.gridDisplay = true;

	$rootScope.current = 0;

	$rootScope.projects = [
		{
			id: 0,
			sortOrder: 2,
			name: "Avoid The Circles",
			image: "img/AvoidTheCirclesSnapshot.JPG",
			link: "/AvoidTheCircles",
			tech: ["HTML", "CSS", "Javascript", "jQuery"],
			tagline: "A simple browser game using jQuery.",
			description: "Keep your mouse pointer away from the growing number of circles generated through Javascript, but don't leave the gaming field or it's game over. Complete with a timer and high score list.",
			points: [
				"Created from scratch using HTML, CSS, JavaScript, and jQuery",
				"HTML elements scaled to browser size",
    		"Circles randomly generated and appended to DOM, then animated to random screen locations",
    		"Leave event bounds mouse pointer within game area when start button is clicked",
    		"Circle area calculation and pointer location comparison function detects pointer-circle collision",
    		"Timer and high-score list",
			],
			github: "https://github.com/nbsteuv/AvoidTheCircles"
		},

		{
			id: 1,
			sortOrder: 3,
			name: "Workout App in C# and .NET",
			image: "img/CSharpWorkoutAppSnapshot.JPG",
			link: "/WorkoutAppCSharp",
			tech: ["C#", ".NET Framework", "WPF", "Visual Studio"],
			tagline: "An application for storing weightlifting data.",
			description: "This .NET application allows users to input workout data, save it in CSV file format, and retrieve it during future sessions for display within the app. To view, click the link below, unzip the folder, and run the EXE file.",
			points: [
				"Available exercise lists update based on muscle group selection",
				"Custom controls are tied to individual exercises and sets for organization and data storage",
				"Customized scroll bars for visual data overflow",
				"Data validation for weight and rep values",
				"Save data in CSV format and retrieve it based on date",
			],
			github: "https://github.com/nbsteuv/WorkoutApplicationCSharpWPF"
		},

		{
			id: 2,
			sortOrder: 4,
			name: "MEAN Stack Workout App",
			image: "img/AngularWorkoutAppSnapshot.JPG",
			link: "http://wkoutappmeanstack-nsteuver.rhcloud.com/",
			tech: ["AngularJS", "MongoDB through MongoLab", "Express", "NodeJS", "SHA1 hash encryption through CryptoJS", "User authentication through Passport and Cookie Parser", "Twitter Bootstrap"],
			tagline: "A MEAN Stack application for storing weightlifting data.",
			description: "An online iteration of the C# .NET workout app, this application allows users to create an account with a SHA1-encrypted password and save their workout data to a MongoLab-hosted Mongo database.",
			points: [
				"Client-side AngularJS interface with multiple views and controllers",
    		"ExpressJS handling GET and POST requests",
    		"NodeJS server environment with local test port and online hosting",
    		"MongoDB data handling through MongoLab",
    		"Password hash encryption with SHA1 through CryptoJS",
    		"User authentication with Passport (Local Strategy) and Cookie Parser",
    		"Styled with Twitter bootstrap",
			],
			github: "https://github.com/nbsteuv/WorkoutAppAngularJS"
		},

		{
			id: 3,
			sortOrder: 1,
			name: "Sliding Tiles Word Game",
			image: "img/TileGameDemo.JPG",
			link: "/TileGameDemo",
			tech: ["C#", ".Net Framework", "Unity Game Engine v5.5", "Visual Studio"],
			tagline: "Form the randomly-generated words with the sliding tiles to win the game.",
			description: "A sliding tile game created in C# .NET with the Unity game engine with a Web GL implementation.",
			points: [
				"Game objects scaled to orthographic screen size",
				"Words selected at random from text files",
				"Tiles instantiated at game start with text from selected words to form tiles",
				"Tiles move to empty square on click event",
				"Tiles will only move if they are adjacent to empty square",
				"Cheat/debugger mode removes movement restriction, so any tile can move to empty square",
				"Time and move counter, with reporting on win screen",
				"Positions of word display, timer, and move counter coded for easy control within Unity editor",
			],
			github: "https://github.com/nbsteuv/Tile-Game"
		},
	];
});
