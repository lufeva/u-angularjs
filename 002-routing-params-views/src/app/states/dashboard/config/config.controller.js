(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('ConfigCtrl', ConfigCtrl);

  /** @ngInject */
  function ConfigCtrl(config) {
    var vm = this;
    vm.config = config;
  }
})();
