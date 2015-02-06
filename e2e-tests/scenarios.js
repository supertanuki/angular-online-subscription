'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /sessions when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/sessions");
  });


  describe('sessions', function() {

    beforeEach(function() {
      browser.get('index.html#/sessions');
    });


    it('should render sessions when user navigates to /sessions', function() {
      expect(element.all(by.css('.row div label')).first().getText()).
        toMatch(/Sélectionner/);
    });

  });
});
