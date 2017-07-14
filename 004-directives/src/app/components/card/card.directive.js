(function () {
  'use strict';

  angular
    .module('angularApp')
    .directive('card', cardDirective);

  /** @ngInject */
  function cardDirective() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/card/card.html',
      controller: 'CardController',
      controllerAs: 'cardCtrl',
      scope: {
        // String representing the icon to use in the card.
        icon: '=',
        // String representing the background color of the card.
        background: '=',
        // String representing the text color of the card.
        textColor: '=',
        // String representing the title of the card.
        title: '=',
        // String representing the description of the card.
        description: '=',
        // String representing the reserve by of the card.
        reservedBy: '@',
        // Calls set Favorite .
        favorite: '&'
      },
      bindToController: true
    };
  }

})();
