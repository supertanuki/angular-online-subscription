(function() {
    'use strict';

	var version = '?v=' + (new Date().getTime());
	
	angular.module('myApp.services', ['ngResource'])
	
	.factory('Session', ['$resource', Session]);
	
	function Session($resource) {
		return $resource('data/session/:sessionId.json' + version, {}, {
			query: {method:'GET', params:{sessionId:'sessions'}}
		});
	}

})();