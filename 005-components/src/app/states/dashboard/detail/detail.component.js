(function(){
    'use strict';

    angular
        .module('angularApp')
        .component('dasDetailComponent',{
            templateUrl: 'app/states/dashboard/detail/detail.html',
            controller: 'DashboardDetailController',
            controllerAs: 'dasDetailCtrl'
        });
})();