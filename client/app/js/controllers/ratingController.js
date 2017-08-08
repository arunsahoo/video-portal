// App rating Controller
videoApp.controller('ratingController', function($scope, $rootScope, $cookieStore, $http) {
    //$scope.rating = 5;
    $scope.rateFunction = function(id, rating) {
        $http({
            method : "POST",
            url : "/video/ratings?sessionId="+$cookieStore.get('sessionId'),
            data: { videoId: id, rating: rating }
        }).then(function mySucces(response) {
        	$scope.valid = true;
            $scope.result = response.data;
        }, function myError(response) {
            $scope.valid = false;
            alert(response.data.error);
        });
    };
  });
// App rating controller ends