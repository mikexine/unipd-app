var apiurl = "http://188.166.145.27/api/unipd";

angular.module('app.controllers', [])

.controller('mensaCtrl', function($scope, $http) {
    $scope.doRefresh = function() {
        myuni = window.localStorage['university'];
        $http.get(apiurl + "/mensa/")
            .success(function(newItems) {
                console.log(newItems);
                //$scope.refreshed = "Last update: " + newItems[0].mensa.last_update;
                $scope.refreshed = true;
                $scope.last_update = newItems["last_update"];
                window.localStorage['last_update_mensa'] = newItems["last_update"];
                delete newItems["last_update"];
                $scope.mense = newItems;
                window.localStorage['mensa'] = JSON.stringify(newItems);
            })
            .finally(function() {
                // Stop the ion-refresher from spinning
                $scope.$broadcast('scroll.refreshComplete');
            });
    };
    $scope.$on('$ionicView.loaded', function() {
        $scope.mense = JSON.parse(window.localStorage['mensa'] || '{}');
        $scope.last_update = window.localStorage['last_update_mensa'];
    });

    $scope.gotoMap= function(mensa) {
        var lat = mensa['coord']['lat'];
        var lon = mensa['coord']['lon'];
        if (ionic.Platform.isIOS()) {
    window.open("http://maps.apple.com/?ll="+lat+","+lon+"&q="+mensa['nome'], '_system', 'location=yes')  
  } else {
    window.open("geo:0,0?q="+lat+','+lon+'('+mensa['nome']+')', '_system', 'location=yes') 
}
    };

})

.controller('aulaStudioCtrl', function($scope, $http) {
    $scope.doRefresh = function() {
        myuni = window.localStorage['university'];
        $http.get(apiurl + "/aulastudio/")
            .success(function(newItems) {
                console.log(newItems);
                //$scope.refreshed = "Last update: " + newItems[0].mensa.last_update;
                $scope.refreshed = true;
                $scope.aule = newItems;
                window.localStorage['aulastudio'] = JSON.stringify(newItems);
            })
            .finally(function() {
                // Stop the ion-refresher from spinning
                $scope.$broadcast('scroll.refreshComplete');
            });
    };
    $scope.$on('$ionicView.loaded', function() {
        $scope.aule = JSON.parse(window.localStorage['aulastudio'] || '{}');
    });

        $scope.gotoMap= function(aula) {
        var lat = aula['coord']['lat'];
        var lon = aula['coord']['lon'];
        if (ionic.Platform.isIOS()) {
    window.open("http://maps.apple.com/?ll="+lat+","+lon+"&q="+aula['nome'], '_system', 'location=yes')  
  } else {
    window.open("geo:0,0?q="+lat+','+lon+'('+aula['nome']+')', '_system', 'location=yes') 
}
    };

})

.controller('bibliotecaCtrl', function($scope, $http) {
    $scope.doRefresh = function() {
        myuni = window.localStorage['university'];
        $http.get(apiurl + "/biblioteca/")
            .success(function(newItems) {
                console.log(newItems);
                //$scope.refreshed = "Last update: " + newItems[0].mensa.last_update;
                $scope.refreshed = true;
                $scope.biblioteche = newItems;
                window.localStorage['biblioteca'] = JSON.stringify(newItems);
            })
            .finally(function() {
                // Stop the ion-refresher from spinning
                $scope.$broadcast('scroll.refreshComplete');
            });
    };
    $scope.$on('$ionicView.loaded', function() {
        $scope.biblioteche = JSON.parse(window.localStorage['biblioteca'] || '{}');
    });

        $scope.gotoMap= function(biblio) {
        var lat = biblio['coord']['lat'];
        var lon = biblio['coord']['lon'];
        if (ionic.Platform.isIOS()) {
    window.open("http://maps.apple.com/?ll="+lat+","+lon+"&q="+biblio['nome'], '_system', 'location=yes')  
  } else {
    window.open("geo:0,0?q="+lat+','+lon+'('+biblio['nome']+')', '_system', 'location=yes') 
}
    };
})

.controller('infoCtrl', function($scope) {

})

.controller('logInCtrl', function($scope, $http, $state, $timeout) {
    $scope.init = function() {

        console.log('test');
        $http.get(apiurl + "/mensa/")
            .success(function(newItems) {
                console.log(newItems);
                window.localStorage['last_update_mensa'] = newItems["last_update"];
                delete newItems["last_update"];
                window.localStorage['mensa'] = JSON.stringify(newItems);
            })


            $http.get(apiurl + "/aulastudio/")
            .success(function(newItems) {
                window.localStorage['aulastudio'] = JSON.stringify(newItems);
            })


            $http.get(apiurl + "/biblioteca/")
            .success(function(newItems) {
                window.localStorage['biblioteca'] = JSON.stringify(newItems);
            })

            $timeout(function() {$state.go('tabsController.info')}, 3500);




    }
        $scope.init();
    
})
