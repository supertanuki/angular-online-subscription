'use strict';

angular.module('myApp.sessions', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/sessions', {
			templateUrl: 'view/session/sessions.html',
			controller: 'SessionCtrl'
		})
		.when('/sessions/v2', {
			templateUrl: 'view/session/sessionsv2.html',
			controller: 'SessionV2Ctrl'
		});
}])

.controller('SessionCtrl', ['$scope', 'Session', function($scope, Session) {
	$scope.sessions = Session.query();
}])

.controller('SessionV2Ctrl', ['$scope', 'Session', function($scope, Session) {
	$scope.sessions = Session.query();
}]);