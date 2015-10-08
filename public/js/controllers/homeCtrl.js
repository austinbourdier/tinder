angular.module('myApp')
.controller('homeCtrl', homeController)
.directive('onFinishRender', onFinishRender);
function homeController($scope){
  $scope.cards = data;

  var stack;
  $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
    stack = gajus.Swing.Stack();
    [].forEach.call(document.querySelectorAll('.stack li'), function (targetElement) {
      stack.createCard(targetElement);
      targetElement.classList.add('in-deck');
    });
    stack.on('throwoutleft', function (e) {
      e.target.classList.remove('in-deck');
    });
    stack.on('throwoutright', function (e) {
      $scope.match = true;
      $scope.$apply();
      e.target.classList.remove('in-deck');
    });
    stack.on('dragmove', function (e) {
      if(e.throwDirection == 1) {
        // right drag
        $scope.draggingLeft = false;
        $scope.draggingRight = true;
      } else {
        // left drag
        $scope.draggingRight = false;
        $scope.draggingLeft = true;
      }
      $scope.$apply();
    });
    stack.on('dragend', function (e) {
      $scope.draggingRight = false;
      $scope.draggingLeft = false;
      $scope.$apply();
    });
  });

}

function onFinishRender ($timeout) {
  return {
    restrict: 'A',
    link: function (scope, element, attr) {
      if (scope.$last === true) {
        $timeout(function () {
          scope.$emit('ngRepeatFinished');
        });
      }
    }
  }
}
