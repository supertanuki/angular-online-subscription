'use strict';

angular.module('myApp.sessions', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/sessions', {
			templateUrl: 'sessions/sessions.html',
			controller: 'SessionsCtrl'
		});
}])

.controller('SessionsCtrl', ['$scope', 'Session', function($scope, Session) {
	$scope.sessions = Session.query();
}]);