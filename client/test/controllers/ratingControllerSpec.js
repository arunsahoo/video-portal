describe('VideoApp: RatingTestSuite', function() {

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

//Testing to update video rating by video id
	it('should update video rating by video id', function() {
	    var $scope = {};
		var controller = $controller('ratingController', { $scope: $scope });

		$httpBackend.whenPOST("/video/ratings").respond(200, {});
	    $scope.rateFunction('597f075108ac282559d23b65', 4);
	    
	    $httpBackend.flush();
	    expect($scope.valid).toBeTruthy();
  	});

//Testing video rating error message
	it('should return error message', function() {
	    var $scope = {};
		var controller = $controller('ratingController', { $scope: $scope });

		$httpBackend.whenPOST("/video/ratings").respond(404, {});
	    $scope.rateFunction('597f075108ac282559d23b65', 7);
	    
	    $httpBackend.flush();
	    //expect($scope.result).toBeTruthy();
  	});
});