(function() {
  'use strict';

  angular
    .module('app.routes.login', [])
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/states/auth/login.html',
        controller: 'LoginController',
        controllerAs: 'loginCtrl',
        data: {
          requiresLogin: false
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();