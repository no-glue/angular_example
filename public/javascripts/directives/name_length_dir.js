theApp.directive("NameLength", function() {
  return {
    restrict: "A",
    require: "ngModel",
    link: function(scope, element, attributes, ngModel) {
      ngModel.$validators.nameLength = function(modelValue) {
        return modelValue.length > 4;
      };
    }
  };
});
