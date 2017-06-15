(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('WeatherController', WeatherController);

  /** @ngInject */
  function WeatherController($http, $scope, $mdDialog, WeatherService) {
    var vm = this;

    vm.kind = '0';
    vm.mapFeatures = {
        center: {
            lat: 38.8225909761771,
            lng: -96.5478515625,
            zoom: 4
        },
        defaults: {
            scrollWheelZoom: false
        },
        events: {
            map: {
                enable: ['click'],
                logic: 'emit'
            }
        }
    };

    $scope.$on('leafletDirectiveMap.map.click', mapClick);


    function mapClick (event, args) {

        var latitude = args.leafletEvent.latlng.lat;
        var longitude = args.leafletEvent.latlng.lng;
        var main, description;

        if(vm.kind == '0'){
            WeatherService.getWeather(latitude, longitude).then(function (response) {
                main = response.weather[0].main;
                description = response.weather[0].description;

                placeMarker(latitude, longitude, main);
                modalResult(('The weather is:'),description);
            }, function (error) {
                modalResult('Sorry', 'Not Data Found');
            });

        }else if(vm.kind == '1'){
            WeatherService.getUV(latitude.toFixed(1), longitude.toFixed(1)).then(function (response) {
                main = response.data;

                placeMarker(latitude, longitude, main);
                modalResult('The UV is:', main);
            }, function (error) {
                modalResult('Sorry', 'Not Data Found ');
            });
        }
    }

    function placeMarker (latitude, longitude, main) {
        vm.mapFeatures.markers ={
            mainMarker: {
                lat: latitude,
                lng: longitude,
                message: main.toString(),
                focus: true,
                draggable: false
            }
        };
    }


    function modalResult (main,description) {
        $mdDialog.show(
          $mdDialog.alert()
            .parent(angular.element(document.querySelector('#popupContainer')))
            .clickOutsideToClose(true)
            .title(main)
            .textContent(description)
            .ariaLabel('Map App')
            .ok('Got it!')
        );
    }
  }

})();
