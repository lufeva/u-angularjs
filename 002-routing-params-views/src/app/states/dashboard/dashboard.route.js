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
        url: '/dashboard',
        views:{
          'nav-bar@' : {
            templateUrl: 'app/states/dashboard/nav-bar/nav-bar.html',
            controller: 'NavBarCtrl',
            controllerAs: 'navBarCtrl'
          },
          '@' : {
            templateUrl: 'app/states/dashboard/dashboard.html',
          }
        },
        data: {
          requiresLogin: true
        }
      })
      .state('main', {
        parent: 'dashboard',
        url: '/main',
        views: {
          'main-section@dashboard': {
            templateUrl: 'app/states/dashboard/main/main.html',
            controller: 'MainCtrl',
            controllerAs: 'mainCtrl'
          }
        },
        data: {
          requiresLogin: true
        },
        resolve: {
          /** @Inject*/
          currentUser: function (Auth) {
            return Auth.currentUser();
          }
        }
      })
      .state('details', {
      	parent: 'dashboard',
      	url: '/details',
        params: {
          currentUser: {}
        },
        views: {
          'main-section@dashboard': {
            templateUrl: 'app/states/dashboard/details/details.html',
            controller: 'DetailsCtrl',
            controllerAs: 'detailsCtrl'
          }
        },
        data: {
          requiresLogin: true
        }
      })
      .state('config', {
        parent: 'dashboard',
        url: '/config',
        params: {
          currentUser: {}
        },
        views: {
          'main-section@dashboard': {
            templateUrl: 'app/states/dashboard/config/config.html',
            controller: 'ConfigCtrl',
            controllerAs: 'configCtrl'
          }
        },
        data: {
          requiresLogin: true
        },
        resolve: {
          /** @Inject*/
          config: function ($http) {
            return $http.get("app/states/dashboard/config/config.json").then(function(response) {
              return response.data;
            });
          }
        }
      })
  }
})();
