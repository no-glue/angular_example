var theApp = angular.module("TheApp", ['ngRoute']).config(router);

function router($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'html/index.html',
    controller: 'IndexCtrl'
  });
}
