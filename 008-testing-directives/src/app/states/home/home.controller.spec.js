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

    it('should add an element to favoriteList when setFavorite is called', function() {
      var item = {id: '01'};
      suite.vm.card.setFavorite(item)
      expect(suite.vm.favoriteList.lenght).not.toBeLessThan(0);
    });

    it('should add an element to favoriteList when setFavorite is called', function() {
      var itemClass = 'color';
      suite.vm.setIcon(itemClass)
      expect(suite.vm.card.icon).toEqual(itemClass);
    });
  });
})();