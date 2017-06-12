(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('DetailsCtrl', DetailsCtrl);

  /** @ngInject */
  function DetailsCtrl($stateParams, Auth) {
    var vm = this;
    vm.userList = getUserList();
    vm.currentUser = $stateParams.currentUser;

    function getUserList() {
      return Auth.getUserList();
    }
  }
})();
