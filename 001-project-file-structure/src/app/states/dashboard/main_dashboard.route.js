(function() {
  'use strict';

  angular
    .module('app.routes.dashboard', [])
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/states/dashboard/main_dashboard.html',
        controller: 'MainDashboardController',
        controllerAs: 'mainDashboardControllerCtrl',
        data: {
          requiresLogin: true
        }
      });
    $urlRouterProvider.otherwise('/');
  }

})();