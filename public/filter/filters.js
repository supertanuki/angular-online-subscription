angular.module('myApp.filters', []).filter('showOnce', function() {
   var prevVal = null;
   return function(input) {
     if (prevVal !== input) {
       prevVal = input;
       return prevVal;
     }
   };
});