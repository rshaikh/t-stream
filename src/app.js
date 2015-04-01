var phonecatApp = angular.module('phonecatApp', ['rt.encodeuri','ngRoute','phonecatControllers']).config(
    function($compileProvider, $routeProvider)
    {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|app):/);
        $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|app):/);
        // Angular before v1.2 uses $compileProvider.urlSanitizationWhitelist(...)

        $routeProvider.
            when('/phones', {
                templateUrl: 'partials/phone-list.html',
                controller: 'PhoneListCtrl'
            }).
            when('/phones/:phoneId', {
                templateUrl: 'partials/phone-detail.html',
                controller: 'PhoneDetailCtrl'
            }).when('/home', {
                templateUrl: 'partials/home.html'
            }).when('/search/:magnet', {
                templateUrl: 'partials/search.html',
                controller: 'SearchCtrl'
            }).otherwise({
                redirectTo: '/home'
            });
    }
);