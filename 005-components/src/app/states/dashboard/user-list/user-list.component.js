(function(){
    'use strict';

    angular
        .module('angularApp')
        .component('userListComponent',{
            bindings: {
                users: '<'
            },
            controller: 'UserListController',
            templateUrl: 'app/states/dashboard/user-list/user-list.html',
            controllerAs: 'userListCtrl'
        });
})();