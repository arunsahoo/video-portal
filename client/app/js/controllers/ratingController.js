// App rating Controller
videoApp.controller('ratingController', function($scope, $cookieStore, $http) {
    //$scope.rating = 5;
    $scope.rateFunction = function(id, rating) {
        $http({
            method : "POST",
            url : "/video/ratings",
            data: { videoId: id, rating: rating }
        }).then(function mySucces(response) {
        	$scope.valid = true;
            $scope.result = response.data;
        }, function myError(response) {
            $scope.valid = false;
            $scope.result = response.myError;
        });
    };
  });
// App rating controller ends