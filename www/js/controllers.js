angular.module('starter.controllers', [])

.controller('DashCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.lat = 'Getting latitude...';
  $scope.long = 'Getting longitude...';
  $scope.emergencynumber = window.localStorage['emergencynumber'] || '+16505578826';
  $scope.phonenumber = window.localStorage['phonenumber'] || null;
  $scope.test1 = null;
  $scope.test2 = null;
  var d = new Date();
  var n = d.getHours();
  $scope.currenthour = n;
  $scope.setEmergencyNumber = function(emergencynumber){
    $scope.$apply();
    $scope.emergencynumber = emergencynumber;
    window.localStorage['emergencynumber'] = $scope.emergencynumber;
  };
  $scope.setPhoneNumber = function(phonenumber){
    $scope.$apply();
    $scope.phonenumber = phonenumber;
    window.localStorage['phonenumber'] = $scope.phonenumber;
  };
  
  // onSuccess Callback
  //   This method accepts a `Position` object, which contains
  //   the current GPS coordinates
  
  function onSuccess(position) {
    $scope.lat = position.coords.latitude;
    $scope.long = position.coords.longitude;
    $scope.$apply();
  }
  
  // onError Callback receives a PositionError object
  //
  function onError(error) {
      alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
  }
  $scope.submit_form = function() {
      var form =  document.getElementById("call_medic_form");
      var test = confirm("Are you sure you want to call a doctor?");
      if (test){
        form.submit();
      }

  }
  // Options: throw an error if no update is received every 30 seconds.
  //
  var watchID = navigator.geolocation.watchPosition(onSuccess, onError, {});


}])

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.emergencynumber = window.localStorage['emergencynumber'] || '+16505578826';
  $scope.phonenumber = window.localStorage['phonenumber'] || null;

})

.controller('EditEmergencyCtrl', function($scope, $window){
  $scope.emergencynumber = window.localStorage['emergencynumber'] || '+16505578826';
  $scope.setEmergencyNumber = function(emergencynumber){
    $scope.$apply();
    $scope.emergencynumber = emergencynumber;
    window.localStorage['emergencynumber'] = $scope.emergencynumber;
    // window.location.reload();
    window.location.replace('#/tab/account');
    $window.location.reload();
  };
})

.controller('EditPhoneCtrl', function($scope, $window){
  $scope.phonenumber = window.localStorage['emergencynumber'] || '+16505578826';
  $scope.setPhoneNumber = function(phonenumber){
    $scope.$apply();
    $scope.phonenumber = phonenumber;
    window.localStorage['phonenumber'] = $scope.phonenumber;
    // window.location.reload();
    window.location.replace('#/tab/account');
    $window.location.reload();
  };
});
