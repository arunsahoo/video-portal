//Test Suite for Video App
describe('VideoApp: LoginTestSuite', function() {

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

  	//Testing loginController Controller to be defined
	it('Should loginController be defined', function() {
		var $scope = {};
	  	var controller = $controller('loginController', { $scope: $scope });
	  	expect('loginController').toBeDefined();
	});

	//Testing user redirection to videos page on successful login
	it('should logs a user in and redirect', function() {
	    var $scope = {};
		var controller = $controller('loginController', { $scope: $scope });

		$httpBackend.whenPOST($scope.url).respond(200, {sessionId: 'asfDLasdf234DkjaSlkjasd242345sfg'});
	    $scope.password = '';
	    $scope.login();
	    
	    $httpBackend.flush();
	    expect($location.path()).toBe('/videos');
  	});

  	//Testing creation of sessionId Cookie on successful user login
	// it('should create cookies on user login', function() {
	//     expect($cookieStore.get('sessionId')).toBe('asfDLasdf234DkjaSlkjasd242345sfg');
 //  	});

  	//Testing user logout
	it('should logout user', function() {
	    var $scope = {};
		var controller = $controller('loginController', { $scope: $scope });

		$httpBackend.whenGET("/user/logout?sessionId="+$cookieStore.get('sessionId')).respond(200);
	    $scope.logout();
	    
	    $httpBackend.flush();
	    expect($location.path()).toBe('/');
  	});

	//Testing user redirection on failed login
  	it('should not redirect on user login fail', function() {
	    var $scope = {};
		var controller = $controller('loginController', { $scope: $scope });
		$httpBackend.whenPOST($scope.url).respond(404);
	    $scope.password = '';
	    $scope.login();
	    
	    $httpBackend.flush();
	    expect($location.path()).toBe('/');
  	});
	
});