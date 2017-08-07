//App video controller
videoApp.controller('videoController', 
    function($scope, $http, $cookieStore, $location, $rootScope, $window){

    var limit = 10;
    var httpRequest = $http({
    method: 'GET',
    url: "/videos?sessionId="+$cookieStore.get('sessionId')+"&limit="+limit

    }).success(function(data, status) {
        $scope.allVideos = data.data;
    });

    var count = 0;
    //Function to Lazy loads videos under infinite scroll
    $scope.loadMore = function() {
        count++;
        var skip = limit*count;
        var httpRequest = $http({
        method: 'GET',
        url: "/videos?sessionId="+$cookieStore.get('sessionId')+"&skip="+skip+"&limit="+limit

        }).success(function(data, status) {
            for (var i = 0; i <= 9; i++) {
                $scope.allVideos.push(data.data[i]);
            }
        });
      };

    //Function to Call Individual video page by ID
    $scope.callVideo = function($id){
            $location.path("/video:"+$id);
        };

        var videoId = $location.url();
        videoId = videoId.replace("/video:", "");

        $http({
            method: 'GET',
            url: "/video?sessionId="+$cookieStore.get('sessionId')+"&videoId="+videoId

        }).success(function(data, status) {
            $scope.getVideo = data.data;
        });

    //Function to Play single clicked video and Pause all other running videos
    $scope.pauseOrPlay = function(){
        $("video").each(function(){
            $(this).get(0).pause();
        });
    };

    //Function to Calculates avg rating of all videos
    $scope.calculateAverageRating = function(videoRatings){ 
        var sum = 0; 
        var ratingLen = videoRatings.length;
        for(var i = 0; i < ratingLen; i++){
            sum += parseInt(videoRatings[i], 10); //don't forget to add the base 
        }

        var avg = sum/ratingLen;

        return Math.round(avg); 
    };
});