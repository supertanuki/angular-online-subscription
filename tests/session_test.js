'use strict';

describe('myApp.sessions module', function() {

	beforeEach(module('myApp.sessions'));

	describe('sessions controller', function(){

		it('Should SessionCtrl exists', inject(function($controller) {		
			var sessionsCtrl = $controller('SessionCtrl');
			expect(sessionsCtrl).toBeDefined();
    	}));
		
	});
});