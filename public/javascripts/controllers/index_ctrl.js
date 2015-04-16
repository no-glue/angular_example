theApp.controller('IndexCtrl', ['$scope', function($scope) {
  $scope.nameInvalid = null;
  $scope.nameChanged = function(person) {
    if(person.name.length > 4) {
      $scope.nameInvalid = null;
    } else {
      $scope.nameInvalid = 1;
    }
  };
  $scope.formSubmit = function() {
  };
}]);
