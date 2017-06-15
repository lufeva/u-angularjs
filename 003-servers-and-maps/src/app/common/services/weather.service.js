(function() {
  'use strict';

  angular
    .module('angularApp')
    .service('WeatherService', WeatherService);

  /** @ngInject */
  function WeatherService($http) {
	return {
		getWeather: getWeather,
		getUV: getUV
	};

	function getWeather(latitude, longitude) {
		var config = {
	  		params: {
	  			APPID: '534eccb946ce639dbb41f82b8be15dcc',
	  			lat: latitude,
	  			lon: longitude
	  		}
	  	};

		return $http.get('http://api.openweathermap.org/data/2.5/weather?',config).then(function (weatherResponse){
        	return weatherResponse.data;
      	});
	}

	function getUV(latitude, longitude) {
		var config = {
	  		params: {
	  			appid: '534eccb946ce639dbb41f82b8be15dcc'
	  		}
	  	};

		return $http.get('http://api.openweathermap.org/v3/uvi/'+latitude+','+longitude+'/current.json',config).then(function (pollutionResponse){
        	return pollutionResponse.data;
      	});
	}

  }
})();