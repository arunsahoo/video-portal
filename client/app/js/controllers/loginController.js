//App Login Controller
videoApp.controller('loginController', function loginController($scope, $rootScope, $http, $cookies, $cookieStore, $location, md5){
    //Check if user is already logged in.
    if ($cookies.get('sessionId')==null) {
        $location.path('/');
    }

    //User login function
    $scope.login = function(){
        $scope.url = "/user/auth";

        $http({
            method : "POST",
            url : $scope.url,
            data: { username: $scope.username, password: md5.createHash($scope.password) }
        }).then(function mySucces(response) {
            $scope.userStatus = response.data;
            $cookieStore.put('sessionId', $scope.userStatus.sessionId);
            $rootScope.sessionId = $scope.userStatus.sessionId;
            $location.path("/videos");
        }, function myError(response) {
            $scope.valid = response;
            $scope.userStatus = response.statusText;
        });
    };

    //User logout function
    $scope.logout = function(){
        $http({
            method : "GET",
            url : "/user/logout?sessionId="+$cookieStore.get('sessionId')
        }).then(function mySucces(response) {
            $scope.userStatus = response.data;
            $cookieStore.remove('sessionId');
            $rootScope.sessionId = null;
            $location.path("/");
        }, function myError(response) {
            $scope.userStatus = response.statusText;
        })
    };
});