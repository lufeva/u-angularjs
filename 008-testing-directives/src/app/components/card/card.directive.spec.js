(function() {
  'use strict';

  var elm, $compile, $rootScope, $timeout;

  describe('directive card', function() {

    beforeEach(module('angularApp'));

    beforeEach(inject(function ($injector) {
    	$rootScope = $injector.get('$rootScope');
    	$compile = $injector.get('$compile');
    	$timeout = $injector.get('$timeout');

    	$rootScope.cardValues = {
    		title: '',
    		description : '',
    		background : '',
    		textColor: '',
    		reservedBy: '',
    		icon: 'iconMock',
    		setFavorite : function() {},
    	};

    	elm = angular.element(
    		'<card title="cardValues.title"' +
	            'description="cardValues.description"' +
	            'background="cardValues.background"' +
	            'text-color="cardValues.textColor"' +
	            'reserved-by="{{cardValues.reservedBy}}"' +
	            'cb-favorite="cardValues.setFavorite(title)"' +
	            'icon="cardValues.icon">' +
      		'</card>'
    	);

	    $compile(elm)($rootScope);
    	$rootScope.$apply();
  	}));

  	it('Should render cardValues.title into card directive', function () {
  		var titleElement = elm.find('.title');
  		$rootScope.cardValues.title = 'titleMock';
        $rootScope.$apply();

        expect(titleElement).toBeDefined();
        expect(titleElement.text()).toEqual($rootScope.cardValues.title);
    });

    it('Should render cardValues.description into card directive', function () {
  		var descriptionElement = elm.find('.description');
  		$rootScope.cardValues.description = 'descriptionMock';
        $rootScope.$apply();

        expect(descriptionElement).toBeDefined();
        expect(descriptionElement.text()).toEqual($rootScope.cardValues.description);
    });

    it('Should render cardValues.reservedBy into card directive', function () {
  		var reservedByElement = elm.find('.reservedBy');
  		$rootScope.cardValues.reservedBy = 'reservedByMock';
        $rootScope.$apply();

        expect(reservedByElement).toBeDefined();
        expect(reservedByElement.text()).toEqual($rootScope.cardValues.reservedBy);
    });

    it('Should render cardValues.textColor into card directive', function () {
  		$rootScope.cardValues.textColor = 'rgb(51, 51, 51)';
        $rootScope.$apply();
        expect(elm.css('color')).toEqual($rootScope.cardValues.textColor);
    });

    it('Should render cardValues.background into card directive', function () {
  		$rootScope.cardValues.background = 'rgb(51, 51, 51)';
        $rootScope.$apply();
        expect(elm.css('background')).toEqual($rootScope.cardValues.background);
    });

    it('Should render cardValues.favorite into card directive', function () {
  		var favoriteElement = elm.find('.favorite');
        spyOn($rootScope.cardValues,'setFavorite');

        favoriteElement.click();
	    expect($rootScope.cardValues.setFavorite).toHaveBeenCalledWith($rootScope.cardValues.title);
    });
  });
})();