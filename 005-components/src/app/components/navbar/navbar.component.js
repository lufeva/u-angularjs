(function(){
    'use strict';

    angular
        .module('angularApp')
        .component('navbarComponent',{
            templateUrl: 'app/components/navbar/navbar.html',
            controller: 'NavbarController',
            controllerAs: 'navCtrl'
        });
})();