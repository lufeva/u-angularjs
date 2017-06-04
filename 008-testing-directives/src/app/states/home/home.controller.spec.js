(function() {
  'use strict';

  describe('HomeController', function() {
    var suite = {};

    beforeEach(module('angularApp'));

    beforeEach(inject(function($injector) {
      suite.$controller = $injector.get('$controller');
      suite.$rootScope = $injector.get('$rootScope');

      suite.vm = suite.$controller('HomeController', {
        $rootScope: suite.$rootScope
      });
    }));

    it('should be registered', function() {
      expect(suite.vm).not.toEqual(null);
    });

  });
})();