(function() {
  'use strict';

  angular
    .module('angularApp')
    .config(routerAuth);

  /** @ngInject */
  function routerAuth($stateProvider) {
    $stateProvider
      .state('dashboard', {
        abstract: true,
        template: 'app/states/dashboard/dashboard.html',
        url: '/dashboard',
      })
      .state('login', {
      	parent: 'auth',
      	url: '/login',
        params: {
          currentUser: {}
        },
        templateUrl: 'app/states/auth/login/login.html',
        controller: 'AuthLoginController',
        controllerAs: 'auLoginCtrl'
      })
       .state('signin', {
      	parent: 'auth',
      	url: '/signin',
        templateUrl: 'app/states/auth/signin/signin.html',
        controller: 'AuthSigninController',
        controllerAs: 'auSigninCtrl'
      });
  }

})();
