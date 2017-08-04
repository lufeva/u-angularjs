(function(){
    'use strict';

    angular
        .module('angularApp')
        .component('homeComponent',{
            templateUrl: 'app/states/home/home.html',
            controller: 'HomeController',
            controllerAs: 'homeCtrl'
        });
})();