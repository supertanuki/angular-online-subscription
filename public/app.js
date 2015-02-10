(function() {
	'use strict';
	
	// Declare app level module which depends on views, and components
	angular.module('myApp', [
	  'ngRoute',
	  'ui.bootstrap',
	  'ui.calendar',
	  'myApp.filters',
	  'myApp.services',
	  'myApp.sessions'
	])

	.config(['$routeProvider', config])
	
	function config($routeProvider) {
	  $routeProvider
	  	.when('/about', {
	  		templateUrl: 'view/page/about.html'
	  	})
	  	.otherwise({
	  		redirectTo: '/sessions'
		});
	}
})();