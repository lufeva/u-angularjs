(function() {
  'use strict';

  angular
    .module('angularApp')
    .config(routerConfig)
    .run(ruterValidations);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }

  function ruterValidations ($rootScope, $log, $state) {
    var changeState = $rootScope.$on('$stateChangeStart', function (event, toState) {
      var requireLogin = toState.data.requiresLogin;
      if (requireLogin && localStorage.currentUser === 'undefined') {
        event.preventDefault();
        $state.go('home');
      } else if (!requireLogin && localStorage.currentUser !== 'undefined') {
        event.preventDefault();
        $state.go('main');
      }
    });
  }

})();
