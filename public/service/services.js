'use strict';

/* Services */

angular.module('myApp.services', ['ngResource'])

.factory('Session', ['$resource', function($resource) {
	return $resource('data/session/:sessionId.json', {}, {
		query: {method:'GET', params:{sessionId:'sessions'}, isArray:true}
	});
}])

.factory('User', ['$resource', function($resource) {
	return $resource('data/user/:userId.json', {}, {
		query: {method:'GET'}
	});
}]);
