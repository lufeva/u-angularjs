(function(){
    'use strict';

    angular
        .module('angularApp')
        .component('dasConfigComponent',{
            templateUrl: 'app/states/dashboard/dashboard/config.html',
            controller: 'DashboardConfigController',
            controllerAs: 'dasConfigCtrl'
        });
})();