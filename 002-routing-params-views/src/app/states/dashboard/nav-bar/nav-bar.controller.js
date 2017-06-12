(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('NavBarCtrl', NavBarCtrl);

  /** @ngInject */
  function NavBarCtrl($state, $stateParams, Auth) {
    var vm = this;

    vm.currentUser = getCurrentUser();
    vm.logOut = logOut;

    function getCurrentUser() {
      return Auth.currentUser();
    }

    function logOut() {
      Auth.logOut();
      $state.go('home');
    }
  }
})();
