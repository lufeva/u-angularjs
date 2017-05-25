(function() {
  'use strict';

  angular
    .module('angularEx1')
    .controller('HomeController', homeController);

  /** @ngInject */
  function homeController($state, $log, SITE_NAME) {
    var vm = this;
    vm.mainTitle = SITE_NAME;
    vm.signUpToday = signUpToday;

    function signUpToday(){
      $state.go('login');
    }

  }
})();
