(function() {
    'use strict';

    angular
        .module('angularApp')
        .controller('DashboardController', DashboardController);

    /** @ngInject */
    function DashboardController($stateParams, $state) {
        var vm = this;
        vm.currentUser = $stateParams.currentUser;
        vm.goToDetail = goToDetailMethod;
        vm.goToConfig = goToConfigMethod;
        vm.goToUserList = goToUserList;

        function goToDetailMethod() {
            $state.go('detail');
        }

        function goToConfigMethod() {
            $state.go('config');
        }

        function goToUserList() {
            $state.go('dashboard.userList');
        }
    }
})();
