// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var myapp = angular.module('app', ['ionic','ionic.service.core',  'ionic.service.analytics', 'app.controllers', 'app.routes', 'app.services', 'app.directives'])

.run(function($ionicPlatform, $ionicAnalytics, $state) {
  $ionicPlatform.ready(function() {
    $ionicAnalytics.register();

    $ionicAnalytics.setGlobalProperties({
      app_version_number: 'v0.0.1',
      day_of_week: (new Date()).getDay(),
      platform: ionic.Platform.platform(),
      version: ionic.Platform.version()
    });

    if (window.localStorage && !window.localStorage.getItem('firstRunFinished'))  {
      $state.go('logIn');
       window.localStorage.setItem('firstRunFinished',true);
    }


    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

  });

})

myapp.config(function($ionicConfigProvider) {
  $ionicConfigProvider.views.maxCache(5);

  // note that you can also chain configs
 $ionicConfigProvider.tabs.position('bottom'); // other values: top

});
