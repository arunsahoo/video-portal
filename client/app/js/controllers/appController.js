//dateController to display current year at footer
videoApp.controller('dateController', function dateController($scope) {
    $scope.date = new Date();
});