var videoApp  = angular.module('videoApp', ['ngRoute', 'ngResource', 'ngCookies', 'ngMd5', 'infinite-scroll', 'ngAnimate']);

videoApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'app/views/login.html'
  })
  .when('/videos', {
    templateUrl: 'app/views/videos.html',
    controller: 'loginController',
    requiresLogin: true
  })
  .when('/video:id', {
    templateUrl: 'app/views/video.html',
    controller: 'loginController',
    requiresLogin: true
  })
  .otherwise({
    redirectTo: '/'
});
}]);