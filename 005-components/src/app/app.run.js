(function() {
  'use strict';

  angular
    .module('angularApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $trace) {

    $log.debug('runBlock AppRuning');
  }

})();
