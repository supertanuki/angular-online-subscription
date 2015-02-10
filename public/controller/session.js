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
				controller: 'SessionCtrl'
			});
	}])
	
	.controller('SessionCtrl', ['$scope', '$filter', 'Session', SessionCtrl])
	
	
	function SessionCtrl($scope, $filter, Session) {
		$scope.uiConfig = {
			 calendar:{
				 height: 200,
				 header: {
					 left: 'title',
					 center: '',
					 right: 'today prev,next'
				 }
			 }
		};
		
		var events = [];
		
		$scope.stage = Session.query();
		
		$scope.events = [[ {title: 'Du 15/02/2015 au 19/02/2015', start: new Date(2015,1,15), end: new Date(2015,1,19)} ]];
		
		/*
		 * function (response) {
		    angular.forEach(response, function(value, key) {
				this.push({title: 'Du ' + $filter('date')(value.dateBegin, 'dd/MM/yyyy') + ' au ' + $filter('date')(value.dateEnd, 'dd/MM/yyyy'), start: value.dateBegin, end: value.dateEnd});
			}, events);
		    $scope.events = [ events ];
		    console.debug($scope.events);
		}
		 */
	}
})();