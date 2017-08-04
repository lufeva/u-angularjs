(function(){
    'use strict';

    angular
        .module('angularApp')
        .component('signupComponent',{
            templateUrl: 'app/states/auth/signup/signup.html',
            controller: 'AuthSignUpController',
            controllerAs: 'auSignupCtrl'
        });
})();