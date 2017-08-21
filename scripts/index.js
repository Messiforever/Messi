/**
 * Created by Administrator on 2017/8/16.
 */
(function () {
   var app = angular.module("messi",['ui.router']);
   app.controller("MessiController",["$scope",function $scope() {


   }]);
    // app.run(function($ionicPlatform) {
    //     $ionicPlatform.ready(function() {
    //         // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    //         // for form inputs)
    //         if(window.cordova && window.cordova.plugins.Keyboard) {
    //             cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    //         }
    //         if(window.StatusBar) {
    //             // org.apache.cordova.statusbar required
    //             StatusBar.styleDefault();
    //         }
    //     });
    // });
    app.config(function($stateProvider, $urlRouterProvider,$locationProvider) {

        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "views/home.html",
                controller: 'HomeCtrl'
            })
            .state('video', {
                url: "/video",
                templateUrl: "views/video.html",
                controller: 'VideoCtrl'
            })
            .state('gallery',{
                url:"/gallery",
                templateUrl:"views/gallery.html",
                controller:"GalleryCtrl"
            })
            .state('about',{
                url:"/about",
                templateUrl:"views/about.html",
                controller:"AboutCtrl"
            });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/home');

    })
        .controller('HomeCtrl', function($scope) {
        })
        .controller('VideoCtrl',function ($scope) {
        })
        .controller('GalleryCtrl',function ($scope) {
        })
        .controller('AboutCtrl',function ($scope) {
        })
})(angular);