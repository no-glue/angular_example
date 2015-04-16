theApp.controller('IndexCtrl', ['$scope', function($scope) {
  $scope.nameChanged = function() {
    console.debug("name changed", $scope.person.name);
  };
  $scope.formSubmit = function() {
  };
}]);
