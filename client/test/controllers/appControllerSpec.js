//Test Suite for Video App
describe('VideoAppTestSuite', function() {

	beforeEach(module('videoApp'));
	var $controller;

	beforeEach(inject(function(_$controller_){
		$controller  = _$controller_;
	}));

	//Testing dateController Controller to be defined
  	it('Should dateController be defined', function() {
		var $scope = {};
	  	var controller = $controller('dateController', { $scope: $scope });
	  	
	  	expect('dateController').toBeDefined();
	});

  	//Testing $scope.date object to be defined
  	it('should define a $scope.date object in the scope', function() {
		var $scope = {};
      	var controller = $controller('dateController', { $scope: $scope });

		expect($scope.date).toBeDefined();
	});
	
});