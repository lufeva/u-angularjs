(function() {
  'use strict';

  angular
    .module('app.routes', ['ui.router', 'app.routes.home', 'app.routes.dashboard', 'app.routes.login'])
    .config(routerConfig)
    .run(ruterValidations);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }

  function ruterValidations ($rootScope, $log, $state) {
	var changeState = $rootScope.$on('$stateChangeStart', function (event, toState) {
		var requireLogin = toState.data.requiresLogin;
		if (requireLogin && typeof sessionStorage.user === 'undefined') {
			event.preventDefault();
			$state.go('home');
		}
	});
  }

})();
