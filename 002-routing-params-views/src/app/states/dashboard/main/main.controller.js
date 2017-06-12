(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('MainCtrl', MainCtrl);

  /** @ngInject */
  function MainCtrl(currentUser) {
    var vm = this;
    vm.currentUser = currentUser;
  }
})();
