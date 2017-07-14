(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($scope, RESERVED_BY) {
    var vm = this;
    vm.RESERVED_BY = RESERVED_BY;
    vm.icons = ['account_circle', 'home', 'alarm'];
    vm.card = {};
    vm.favoriteList = [];
    vm.setIcon = setIcon;
    vm.setFavorite= setFavorite;
    vm.showFavorite= showFavorite;
    vm.indexCard= undefined;
    vm.clearForm= clearForm;
    vm.editCard= editCard;
    vm.removeCard= removeCard;

    function setIcon(iconClass) {
      vm.card.icon = iconClass;
    }

    function setFavorite(icon, title, description, textColor, background) {
      var card = {
        icon: icon,
        title: title,
        description: description,
        textColor: textColor,
        background: background
      };
      vm.favoriteList.push(card);
      vm.card = {};
      $scope.cardForm.$setPristine();
      vm.indexCard= undefined;
    }

    function showFavorite(card, index) {
      vm.savedCard= true;
      vm.card = angular.copy(card);
      vm.indexCard = index;
    }

    function removeCard(index) {
      vm.favoriteList.splice(index,1);
    }

    function editCard() {
      if (vm.indexCard !== undefined) {
        vm.favoriteList[vm.indexCard] = vm.card;
        vm.indexCard= undefined;
      }
    }

    function clearForm() {
      vm.card = {};
      vm.indexCard= undefined;
      $scope.cardForm.$setPristine();
    }
  }

})();
