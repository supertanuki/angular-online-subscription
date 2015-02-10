(function() {
    'use strict';

	angular.module('myApp.filters', []).filter('showOnce', showOnce);

	function showOnce() {
	   var prevVal = null;
	   return function(input) {
	     if (prevVal !== input) {
	       prevVal = input;
	       return prevVal;
	     }
	   };
	}
})();