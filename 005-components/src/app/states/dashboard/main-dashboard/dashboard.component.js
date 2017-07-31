(function(){
    'use strict';

    angular
        .module('angularApp')
        .component('dashboardComponent',{
            templateUrl: 'app/states/dashboard/main-dashboard/dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'dasCtrl'
        });
})();