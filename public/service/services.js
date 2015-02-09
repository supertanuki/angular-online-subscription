'use strict';

/* Services */

var version = '?v=' + (new Date().getTime());

angular.module('myApp.services', ['ngResource'])

.factory('Session', ['$resource', function($resource) {
	return $resource('data/session/:sessionId.json' + version, {}, {
		query: {method:'GET', params:{sessionId:'sessions'}}
	});
}])

.factory('User', ['$resource', function($resource) {
	return $resource('data/user/:userId.json' + version, {}, {
		query: {method:'GET'}
	});
}]);
