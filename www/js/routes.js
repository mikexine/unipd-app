angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      .state('logIn', {
            url: '/logIn',
            templateUrl: 'templates/logIn.html',
            controller: 'logInCtrl'
        })

      .state('tabsController.mensa', {
    url: '/mensa',
    views: {
      'tab1': {
        templateUrl: 'templates/mensa.html',
        controller: 'mensaCtrl'
      }
    }
  })

  .state('tabsController.aulaStudio', {
    url: '/aulastudio',
    views: {
      'tab2': {
        templateUrl: 'templates/aulaStudio.html',
        controller: 'aulaStudioCtrl'
      }
    }
  })

  .state('tabsController.biblioteca', {
    url: '/biblioteca',
    views: {
      'tab3': {
        templateUrl: 'templates/biblioteca.html',
        controller: 'bibliotecaCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/tab',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.info', {
    url: '/info',
    views: {
      'tab4': {
        templateUrl: 'templates/info.html',
        controller: 'infoCtrl'
      }
    }
  })

    if (window.localStorage && !window.localStorage.getItem('firstRunFinished'))  {
      $urlRouterProvider.otherwise('/tab/info')
    } else {
      $urlRouterProvider.otherwise('/tab/mensa')
    }



  

});