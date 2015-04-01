var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', function ($scope) {
    $scope.phones = [
        {'id':1,'name': 'Nexus 5', 'snippet': 'Fast just got faster with Nexus S.','age':1},
        {'id':2,'name': 'Motorola XOOM™ with Wi-Fi', 'snippet': 'The Next, Next Generation tablet.','age':2},
        {'id':3,'name': 'MOTOROLA XOOM', 'snippet': 'The Next, Next Generation tablet.','age':3}
    ];

    $scope.orderProp = 'age';
});

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams) {
        $scope.phoneId = $routeParams.phoneId;
}]);

phonecatControllers.controller('SearchCtrl', ['$scope', '$routeParams', 'torrentService',
    function($scope, $routeParams, torrentService) {
        $scope.magnet = decodeURIComponent($routeParams.magnet);
        var onGetFiles = function(files){
            $scope.files = files;
            $scope.dataLoaded = true;
            $scope.$apply();
        };

        $scope.dataLoaded = false;
        torrentService.getFiles($scope.magnet, onGetFiles);
}]);