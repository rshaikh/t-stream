var phonecatApp = angular.module('phonecatApp', ['ngRoute','phonecatControllers']).config(
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
            }).
            otherwise({
                redirectTo: '/phones'
            });
    }
);