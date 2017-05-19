(function() {
  'use strict';

  angular
    .module('app.routes.home', [])
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/states/home/home.html',
        controller: 'HomeController',
        controllerAs: 'homeCtrl',
        data: {
          requiresLogin: false
        }
      });
    $urlRouterProvider.otherwise('/');
  }

})();