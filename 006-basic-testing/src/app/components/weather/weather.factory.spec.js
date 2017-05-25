(function() {
  'use strict';

  describe('service weatherFactory', function() {
    var weatherFactory, suite;

    beforeEach(module('angularApp'));
    beforeEach(module('ngResource'));

    beforeEach(inject(function($injector) {
      suite = {};
      weatherFactory = $injector.get('WeatherFactory');
      suite.httpBackend = $injector.get('$httpBackend');
      suite.WEATHER_API = $injector.get('WEATHER_API');

      suite.httpBackend.whenGET(/(.*)\.html/).respond();
      suite.httpBackend.whenGET(/(.*)\.json/).respond();
    }));


    it('should be registered', function() {
      expect(weatherFactory).not.toEqual(null);
    });

    describe('getWeather function', function() {
      it('should exist', function() {
        expect(weatherFactory.getWeather).not.toEqual(null);
      });
      it('should make a GET to http://api.openweathermap.org/data/2.5/weather and resolve', function(){
        var lat = '123', lon = '456';
        suite.httpBackend.expectGET('http://api.openweathermap.org/data/2.5/weather?APPID='+suite.WEATHER_API+'&lat='+lat+'&lon='+lon).respond(200,{});
        weatherFactory.getWeather(lat, lon).query().$promise.then(function (response){
          expect(response).toEqual({});
        });
      });
    });

    describe('getUV function', function() {
      it('should exist', function() {
        expect(weatherFactory.getUV).not.toEqual(null);
      });
      it('should make a GET to http://api.openweathermap.org/data/2.5/weather and resolve', function(){
        var lat = '123', lon = '456';
        suite.httpBackend.expectGET('http://api.openweathermap.org/v3/uvi/:latlng/current.json?appid='+suite.WEATHER_API).respond(200,{});
        weatherFactory.getUV().query({latlng: [lat, lon]}).$promise.then(function (response){
          expect(response).toEqual({});
        });
      });
    });
  });
})();