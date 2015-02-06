'use strict';

describe('myApp.sessions module', function() {

	beforeEach(module('myApp.sessions'));

	describe('sessions controller', function(){

		it('Should sessionsCtrl exists', inject(function($controller) {		
			var sessionsCtrl = $controller('SessionsCtrl');
			expect(sessionsCtrl).toBeDefined();
    	}));
		
	});
});