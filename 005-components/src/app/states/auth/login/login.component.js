(function(){
    'use strict';

    angular
        .module('angularApp')
        .component('loginComponent',{
            templateUrl: 'app/states/auth/login/login.html',
            controller: 'AuthLoginController',
            controllerAs: 'auLoginCtrl'
        });
})();