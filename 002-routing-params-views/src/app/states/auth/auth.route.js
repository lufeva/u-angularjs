(function() {
  'use strict';

  angular
    .module('angularApp')
    .config(routerAuth);

  /** @ngInject */
  function routerAuth($stateProvider) {
    $stateProvider
      .state('auth', {
        abstract: true,
        template: '<section class="general-section" ui-view></section>',
        url: '/auth',
        data: {
          requiresLogin: false
        }
      })
      .state('login', {
      	parent: 'auth',
      	url: '/login',
        params: {
          currentUser: {}
        },
        data: {
          requiresLogin: false
        },
        templateUrl: 'app/states/auth/login/login.html',
        controller: 'AuthLoginController',
        controllerAs: 'auLoginCtrl'
      })
       .state('signin', {
      	parent: 'auth',
      	url: '/signin',
        data: {
          requiresLogin: false
        },
        templateUrl: 'app/states/auth/signin/signin.html',
        controller: 'AuthSigninController',
        controllerAs: 'auSigninCtrl'
      });
  }

})();
