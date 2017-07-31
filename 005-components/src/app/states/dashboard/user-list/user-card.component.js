(function () {
  'use strict';

  angular
    .module('angularApp')
    .component('userCard', userCard);

  function userCard () {
    return {
      bindings: {
        user: '<',
        onUserSelected: '&',
        onUserLeft: '&'
      },
      templateUrl: 'app/states/dashboard/user-list/user-card.html'
    }
  }
})();

