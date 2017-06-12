(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('AuthLoginController', AuthLoginController);

  /** @ngInject */
  function AuthLoginController($log, $state, $stateParams, Auth) {
    var vm = this;
    vm.error = false;
    vm.currentUser = $stateParams.currentUser;

    vm.logIn = logIn;

   	function logIn() {
   		if(Auth.logIn(vm.currentUser)) {
        $stateParams.currentUser = vm.currentUser;
   			$state.go('main');
   			$log.debug('Great logged', Auth.currentUser());

   		} else{
   			vm.error = true;
   		}
   	}

  }
})();
