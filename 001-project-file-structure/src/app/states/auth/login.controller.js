(function() {
  'use strict';

  angular
    .module('angularEx1')
    .controller('LoginController', loginController);

  /** @ngInject */
  function loginController($scope, $state, $mdDialog, loginService) {
    var vm = this;
    vm.logIn = logIn;
    vm.showError = showError;

    function logIn (){
      if ($scope.loginForm.$invalid) {
        return;
      }
      loginService.logIn(vm.user, vm.password).then(function (response) {
          $state.go('dashboard');
        }, vm.showError);
    }

    function showError(error) {
      $mdDialog.show(
        $mdDialog.alert()
          .parent(angular.element(document.querySelector('#popupContainer')))
          .clickOutsideToClose(true)
          .title('Unnable to Log In')
          .textContent(error)
          .ariaLabel('Log In')
          .ok('OK')
      );
    }
  }
})();
