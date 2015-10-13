angular.module('myApp')
.controller('homeCtrl', homeController)
.directive('onFinishRender', onFinishRender);

function homeController($scope){
  $scope.cards = data;
  var stack;
  $scope.showMatchListView = false;
  $scope.matchList = [];
  $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
    stack = gajus.Swing.Stack();
    [].forEach.call(document.querySelectorAll('.stack li'), function (targetElement) {
      stack.createCard(targetElement);
      targetElement.classList.add('in-deck');
    });
    console.log(stack)
    stack.on('throwoutleft', function (e) {
      $scope.cards.pop();
      e.target.classList.remove('in-deck');
      e.target.style.display = 'none';
    });
    stack.on('throwoutright', function (e) {
      $scope.match = true;
      $scope.currentMatch = $scope.cards.pop();
      $scope.matchList.push($scope.currentMatch);
      $scope.$apply();
      e.target.classList.remove('in-deck');
      e.target.style.display = 'none';
    });
    stack.on('dragmove', function (e) {
      if(e.throwDirection == 1) {
        // right drag
        e.target.children[3].children[1].style.display = "none";
        e.target.children[3].children[0].style.display = "inline";
      } else {
        // left drag
        e.target.children[3].children[0].style.display = "none";
        e.target.children[3].children[1].style.display = "inline";
      }
    });
    stack.on('dragend', function (e) {
      // remove like/nope buttons
      e.target.children[3].children[0].style.display = "none";
      e.target.children[3].children[1].style.display = "none";
    });
  });
  $scope.showMatchList = function() {
    $scope.showMatchListView = !$scope.showMatchListView;
  }
  $scope.leaveMatchScreen = function() {
    $scope.match = false;
    $scope.currentMatch = null;
  }
  $scope.gamePadLeft = function(e) {
    var topCard = document.getElementById('cardStack');
    var children = topCard.children;
    for(var index = children.length-1; index >= 0; index--) {
      var classes = children[index].classList;
      for(var classIndex = 0; classIndex < classes.length; classIndex++) {
        if(classes[classIndex] == 'in-deck') {
          var card = children[index];
          card.classList.remove('in-deck');
          card.style.display = 'none';
          $scope.cards.pop();
          return;
        }
      }
    }
  }
  $scope.gamePadRight = function(e) {
    var topCard = document.getElementById('cardStack');
    var children = topCard.children;
    for(var index = children.length-1; index >= 0; index--) {
      var classes = children[index].classList;
      for(var classIndex = 0; classIndex < classes.length; classIndex++) {
        if(classes[classIndex] == 'in-deck') {
          var card = children[index];
          card.classList.remove('in-deck');
          card.style.display = 'none';
          $scope.match = true;
          $scope.currentMatch = $scope.cards.pop();
          return;
        }
      }
    }
  }
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
