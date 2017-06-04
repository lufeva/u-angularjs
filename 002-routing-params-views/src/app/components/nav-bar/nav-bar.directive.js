(function () {

  'use strict';

  angular.module('angularApp').directive('navBarDirective', navBarDirective);

  function navBarDirective() {
    return {
      templateUrl: 'app/commons/directives/side-nav-menu/side-nav-menu.html',
      restrict: 'E',
      replace: true,
      controller: 'SideNavMenuCtrl',
      controllerAs: 'sideNavMenu'
    }
  }

})();