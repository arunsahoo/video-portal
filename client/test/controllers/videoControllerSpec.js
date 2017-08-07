describe('VideoApp: VideoTestSuite', function() {

	beforeEach(module('videoApp'));
	var $controller;

	beforeEach(inject(function(_$controller_, _$cookies_, _$cookieStore_, _$httpBackend_, _$location_, _$rootScope_){
		$controller  = _$controller_;
		$cookies 	 = _$cookies_;
		$httpBackend = _$httpBackend_;
		$location 	 = _$location_;
		$rootScope 	 = _$rootScope_;
		$cookieStore = _$cookieStore_;
	}));

	//Testing videoController Controller to be defined
	it('Should videoController be defined', function() {
		var $scope = {};
	  	var controller = $controller('videoController', { $scope: $scope });
	  	expect('videoController').toBeDefined();
	});

	//Testing $scope.loadMore to be defined
	it('Should $scope.loadMore be defined', function() {
		var $scope = {};
	  	var controller = $controller('videoController', { $scope: $scope });
	  	expect($scope.loadMore).toBeDefined();
	});

	//Testing $scope.callVideo to be defined
	it('Should $scope.callVideo be defined', function() {
		var $scope = {};
	  	var controller = $controller('videoController', { $scope: $scope });
	  	expect($scope.callVideo).toBeDefined();
	});

	//Testing $scope.pauseOrPlay to be defined
	it('Should $scope.pauseOrPlay be defined', function() {
		var $scope = {};
	  	var controller = $controller('videoController', { $scope: $scope });
	  	expect($scope.pauseOrPlay).toBeDefined();
	});

	//Testing $scope.calculateAverageRating to be defined
	it('Should $scope.calculateAverageRating be defined', function() {
		var $scope = {};
	  	var controller = $controller('videoController', { $scope: $scope });
	  	expect($scope.calculateAverageRating).toBeDefined();
	});

	//Testing to return avg rating
	it('Should return avg rating as 3', function() {
		var $scope = {};
	  	var controller = $controller('videoController', { $scope: $scope });
	  	var rating = [3,3,3];
	  	expect($scope.calculateAverageRating(rating)).toBe(3);
	});

	//Testing to return avg rating
	it('Should return avg rating as 3', function() {
		var $scope = {};
	  	var controller = $controller('videoController', { $scope: $scope });
	  	var rating = [3,1,3,5,5,5];
	  	expect($scope.calculateAverageRating(rating)).toBe(4);
	});

	//Testing to return avg rating
	it('Should return avg rating as 0', function() {
		var $scope = {};
	  	var controller = $controller('videoController', { $scope: $scope });
	  	var rating = [0];
	  	expect($scope.calculateAverageRating(rating)).toBe(0);
	});
	
});