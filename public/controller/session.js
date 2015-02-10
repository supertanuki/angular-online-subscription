(function() {
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
				controller: 'SessionListCtrl'
			});
	}])
	
	.controller('SessionCtrl', ['$scope', 'Session', SessionCtrl])
	
	.controller('SessionListCtrl', ['$scope', 'Session', SessionCtrl]);
	
	function SessionCtrl($scope, Session) {
		$scope.sessions = Session.query();
	}
})();