describe('WeatherController', function () {

  var suite, vm, WeatherFactoryMock;

  beforeEach(module('angularApp'));
  beforeEach(inject(function ($injector) {
    suite = {};
    suite.$controller = $injector.get('$controller');
    suite.$q = $injector.get('$q');
    suite.$log = $injector.get('$log');
    suite.$mdDialog = $injector.get('$mdDialog');
    suite.$rootScope = $injector.get('$rootScope');
    suite.$httpBackend = $injector.get('$httpBackend');
    suite.scope = suite.$rootScope.$new();

    suite.$httpBackend.whenGET(/(.*)\.html/).respond();
    suite.$httpBackend.whenGET(/(.*)\.json/).respond();

    WeatherFactoryMock = {
      getWeather: function (lat, lon) {},
      getUV: function(){}
    };

    vm = suite.$controller('WeatherController', {
      $scope: suite.scope,
      WeatherFactory: WeatherFactoryMock,
      $mdDialog: suite.$mdDialog,
      $log: suite.$log
    });
  }));


  describe('vm.triggerClick', function () {
    it('if the user wants to know the weather should call WeatherFactory.getWeather and resolve with data about weather', function () {
      var event = {};
      var args = {
        leafletEvent: {latlng: {lat: '123'}},
        leafletEvent: {latlng: {lng: '456'}}
      };
      var weatherPromise = suite.$q.defer();

      vm.kind = '0';
      querySpy = jasmine.createSpy('query').and.returnValue({$promise: weatherPromise.promise});
      spyOn(WeatherFactoryMock, 'getWeather').and.returnValue({query: querySpy});
      vm.triggerClick(event,args);
      weatherPromise.resolve({
        name: 'mockPlace',
        weather: [{description: 'mocWeather'}],
        main: {
          temp: 12
        }
      });
      suite.$rootScope.$apply();
      expect(WeatherFactoryMock.getWeather).toHaveBeenCalled();
      expect(querySpy).toHaveBeenCalled();
    });
    it('if the user wants to know the weather should call WeatherFactory.getWeather and resolve without data', function () {
      var event = {};
      var args = {
        leafletEvent: {latlng: {lat: '123'}},
        leafletEvent: {latlng: {lng: '456'}}
      };
      var weatherPromise = suite.$q.defer();

      vm.kind = '0';
      querySpy = jasmine.createSpy('query').and.returnValue({$promise: weatherPromise.promise});
      spyOn(WeatherFactoryMock, 'getWeather').and.returnValue({query: querySpy});
      vm.triggerClick(event,args);
      weatherPromise.resolve({});
      suite.$rootScope.$apply();
      expect(WeatherFactoryMock.getWeather).toHaveBeenCalled();
      expect(querySpy).toHaveBeenCalled();
    });
    it('if the user wants to know the weather should call WeatherFactory.getWeather and reject', function () {
      var event = {};
      var args = {
        leafletEvent: {latlng: {lat: '123'}},
        leafletEvent: {latlng: {lng: '456'}}
      };
      var weatherPromise = suite.$q.defer();

      vm.kind = '0';
      querySpy = jasmine.createSpy('query').and.returnValue({$promise: weatherPromise.promise});
      spyOn(WeatherFactoryMock, 'getWeather').and.returnValue({query: querySpy});
      vm.triggerClick(event,args);
      weatherPromise.reject();
      suite.$rootScope.$apply();
      expect(WeatherFactoryMock.getWeather).toHaveBeenCalled();
      expect(querySpy).toHaveBeenCalled();
    });
    it('if the user wants to know the UV data should call WeatherFactory.getUV and resolve with data', function () {
      var event = {};
      var args = {
        leafletEvent: {latlng: {lat: '123'}},
        leafletEvent: {latlng: {lng: '456'}}
      };
      var weatherPromise = suite.$q.defer();

      vm.kind = '1';
      querySpy = jasmine.createSpy('query').and.returnValue({$promise: weatherPromise.promise});
      spyOn(WeatherFactoryMock, 'getUV').and.returnValue({query: querySpy});
      vm.triggerClick(event,args);
      weatherPromise.resolve({
        data: 'mockPlace'
      });
      suite.$rootScope.$apply();
      expect(WeatherFactoryMock.getUV).toHaveBeenCalled();
      expect(querySpy).toHaveBeenCalled();
    });
    it('if the user wants to know the UV data should call WeatherFactory.getUV and resolve without data', function () {
      var event = {};
      var args = {
        leafletEvent: {latlng: {lat: '123'}},
        leafletEvent: {latlng: {lng: '456'}}
      };
      var weatherPromise = suite.$q.defer();

      vm.kind = '1';
      querySpy = jasmine.createSpy('query').and.returnValue({$promise: weatherPromise.promise});
      spyOn(WeatherFactoryMock, 'getUV').and.returnValue({query: querySpy});
      vm.triggerClick(event,args);
      weatherPromise.resolve({});
      suite.$rootScope.$apply();
      expect(WeatherFactoryMock.getUV).toHaveBeenCalled();
      expect(querySpy).toHaveBeenCalled();
    });
    it('if the user wants to know the UV data should call WeatherFactory.getUV and reject', function () {
      var event = {};
      var args = {
        leafletEvent: {latlng: {lat: '123'}},
        leafletEvent: {latlng: {lng: '456'}}
      };
      var weatherPromise = suite.$q.defer();

      vm.kind = '1';
      querySpy = jasmine.createSpy('query').and.returnValue({$promise: weatherPromise.promise});
      spyOn(WeatherFactoryMock, 'getUV').and.returnValue({query: querySpy});
      vm.triggerClick(event,args);
      weatherPromise.reject();
      suite.$rootScope.$apply();
      expect(WeatherFactoryMock.getUV).toHaveBeenCalled();
      expect(querySpy).toHaveBeenCalled();
    });
  });
});