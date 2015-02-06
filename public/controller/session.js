'use strict';

angular.module('myApp.sessions', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/sessions', {
			templateUrl: 'view/session/sessions.html',
			controller: 'SessionCtrl'
		});
}])

.controller('SessionCtrl', ['$scope', 'Session', function($scope, Session) {
	$scope.sessions = Session.query();
}]);