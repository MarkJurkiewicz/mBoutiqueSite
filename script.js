// Create the route module for mBoutique and name it mbApp
var mbApp = angular.module("mbApp", ["ui.router"]);

mbApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('home', {
            url:'/home',
            templateUrl:"pages/home.html"
        })

        .state('our_macarons', {
            url:'/our_macarons',
            templateUrl:"pages/our_macarons.html"
        })

        .state('gifts_parties', {
            url:'/gifts_parties',
            templateUrl:"pages/gifts_parties.html"
        })

        .state('contact', {
            url:'/contact',
            templateUrl:"pages/contact.html"
        })
});