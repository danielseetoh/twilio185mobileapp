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
      // var element = document.getElementById('geolocation');
      // element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
      //                     'Longitude: ' + position.coords.longitude     + '<br />' +
      //                     '<hr />'      + element.innerHTML;
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
        window.location.href = "tel:"+window.localStorage['emergencynumber'];
      }

  }
  // Options: throw an error if no update is received every 30 seconds.
  //
  var watchID = navigator.geolocation.watchPosition(onSuccess, onError, {});
  
  // $scope.submitData = function(){
  //   // var config = {
  //   //   params: {
  //   //     addresspoint: ($scope.lat, $scope.long),
  //   //     phonenumber: $scope.phonenumber,
  //   //     currenthour: $scope.currenthour
  //   //   }
  //   // };
  //   // $http.post("http://ieor185-danielseetoh.c9users.io/sendmessage", null, config)
  //   //   .success(function (data, status, headers, config)
  //   //   {
  //   //     alert('success');
  //   //   })
  //   //   .error(function (data, status, headers, config)
  //   //   {
  //   //     alert('fail'); 
  //   // });
  //   // var data = "addresspoint=" + encodeURIComponent($scope.lat,$scope.long) + "&phonenumber=" + encodeURIComponent($scope.phonenumber) + "&currenthour=" + encodeURIComponent($scope.currenthour);
  //   // alert(data);
  //   // $http({
  //   //   method: 'POST',
  //   //   url: 'http://ieor185-danielseetoh.c9users.io/sendmessage',
  //   //   data: data,
  //   //   headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  //   // }).success(function(asfsd){
  //   //   alert('success');
  //   // });
  //   Object.toparams = function ObjecttoParams(obj) {
  //     var p = [];
  //     for (var key in obj) {
  //         p.push(key + '=' + encodeURIComponent(obj[key]));
  //     }
  //     return p.join('&');
  //   };

  //   var data1 = {
  //       'addresspoint': '($scope.lat, $scope.long)',
  //       'phonenumber': '$scope.phonenumber',
  //       'currenthour': '$scope.currenthour'
  //   };
  //   $http({
  //       url: 'http://ieor185-danielseetoh.c9users.io/sendmessage',
  //       method: "POST",
  //       data: Object.toparams(data1),
  //       headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  //   })
  //   .then(function(response) {
  //           // success
  //           alert('success');
  //   }, 
  //   function(response) { // optional
  //           // failed
  //           alert('fail');
  //   });

  //   // $http.post('http://ieor185-danielseetoh.c9users.io/sendmessage', data).then(function successCallback(response) {
  //   //   // this callback will be called asynchronously
  //   //   // when the response is available
  //   //   alert('success');
    
  //   // }, function errorCallback(response) {
  //   //   // called asynchronously if an error occurs
  //   //   // or server returns response with an error status.
  //   //   alert('failure');
  //   // });

  // };


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
  $scope.settings = {
    enableFriends: true
  };
});
