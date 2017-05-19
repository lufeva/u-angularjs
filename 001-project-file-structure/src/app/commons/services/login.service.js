(function() {
  'use strict';

  angular
    .module('angularEx1')
    .service('loginService', loginService);

  /** @ngInject */
  function loginService($q) {
	var temporalUser = {
		user : 'user',
		password: 'user'
	}
	return {
		logIn: logIn,
		logOut: logOut
	};

    function logIn(user, password) {
    	if (user === temporalUser.user && password === temporalUser.password) {
    		sessionStorage.user = user;
    		return $q.resolve();
    	} else {
 			return $q.reject('Username or password invalid');
    	}
    }

    function logOut() {
    	sessionStorage.user = undefined ;
    }
  }
})();