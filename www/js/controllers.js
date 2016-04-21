angular.module('starter.controllers', [],  function($httpProvider) {
  // Use x-www-form-urlencoded Content-Type
  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
 
  /**
   * The workhorse; converts an object to x-www-form-urlencoded serialization.
   * @param {Object} obj
   * @return {String}
   */ 
  var param = function(obj) {
    var query = '', name, value, fullSubName, subName, subValue, innerObj, i;
      
    for(name in obj) {
      value = obj[name];
        
      if(value instanceof Array) {
        for(i=0; i<value.length; ++i) {
          subValue = value[i];
          fullSubName = name + '[' + i + ']';
          innerObj = {};
          innerObj[fullSubName] = subValue;
          query += param(innerObj) + '&';
        }
      }
      else if(value instanceof Object) {
        for(subName in value) {
          subValue = value[subName];
          fullSubName = name + '[' + subName + ']';
          innerObj = {};
          innerObj[fullSubName] = subValue;
          query += param(innerObj) + '&';
        }
      }
      else if(value !== undefined && value !== null)
        query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
    }
      
    return query.length ? query.substr(0, query.length - 1) : query;
  };
 
  // Override $http service's default transformRequest
  $httpProvider.defaults.transformRequest = [function(data) {
    return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
  }];
})

.controller('DashCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.lat = 'Getting latitude...';
  $scope.long = 'Getting longitude...';
  $scope.$on('$ionicView.enter', function(e) {
    $scope.emergencynumber = window.localStorage['emergencynumber'] || '+16505578826';
    $scope.phonenumber = window.localStorage['phonenumber'] || null;
    $scope.name = window.localStorage['name'] || null;
    $scope.test1 = null;
    $scope.test2 = null;
    var d = new Date();
    var n = d.getHours();
    $scope.currenthour = n;
  });
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
    var test = confirm("Are you sure you want to call a doctor?");
    if (test){
      $scope.addresspoint = ($scope.lat, $scope.long)
      var data = "phonenumber=" + $scope.phonenumber + "&lat=" + $scope.lat + "&long=" + $scope.long + "&currenthour=" + $scope.currenthour + "&name=" + $scope.name;
      $http.post("http://ieor185-danielseetoh.c9users.io/sendmessage", data, {'Content-Type': 'application/x-www-form-urlencoded'}
      ).success(function (data, status, headers, config) {
          // TODO
          alert('Success!');
      }).error(function (data, status, headers, config) {
          // TODO
          alert('Error!');
      });
    }
  }
  // Options: throw an error if no update is received every 30 seconds.
  //
  var watchID = navigator.geolocation.watchPosition(onSuccess, onError, {});

  
}])

.controller('TipsCtrl', function($scope, Tips) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //


  $scope.tips = Tips.all();
  $scope.remove = function(tip) {
    Tips.remove(tip);
  };
})

.controller('TipDetailCtrl', function($scope, $stateParams, Tips) {
  $scope.tip = Tips.get($stateParams.tipId);
})

.controller('AccountCtrl', function($scope) {
  $scope.$on('$ionicView.enter', function(e) {
    $scope.emergencynumber = window.localStorage['emergencynumber'] || '+16505578826';
    $scope.phonenumber = window.localStorage['phonenumber'] || null;
    $scope.name = window.localStorage['name'] || null;
  });
})

.controller('EditEmergencyCtrl', function($scope, $window){
  $scope.emergencynumber = window.localStorage['emergencynumber'] || '+16505578826';
  $scope.setEmergencyNumber = function(emergencynumber){
    $scope.$apply();
    $scope.emergencynumber = emergencynumber;
    window.localStorage['emergencynumber'] = $scope.emergencynumber;
    window.location.replace('#/tab/account');
  };
})

.controller('EditPhoneCtrl', function($scope, $window){
  $scope.phonenumber = window.localStorage['phonenumber'] || null;
  // currently only works for north american numbers
  $scope.phregex = /^[\+][1][(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
  $scope.error = null;
  $scope.setPhoneNumber = function(phonenumber){
    if ($scope.phregex.exec(phonenumber)) {
      $scope.$apply();
      $scope.phonenumber = phonenumber;
      $scope.error = null;
      window.localStorage['phonenumber'] = $scope.phonenumber;
      window.location.replace('#/tab/account');
    } else {
      $scope.error = "Error: Follow the format +15101234567."
    }
  };
})

.controller('EditNameCtrl', function($scope, $window){
  $scope.name = window.localStorage['name'] || null;
  $scope.setName = function(name){
    $scope.$apply();
    $scope.name = name;
    window.localStorage['name'] = $scope.name;
    window.location.replace('#/tab/account');
  };
})

.controller('DonationCtrl', function($scope, $window){
  // $scope.name = window.localStorage['name'] || null;
  // $scope.setName = function(name){
  //   $scope.$apply();
  //   $scope.name = name;
  //   window.localStorage['name'] = $scope.name;
  //   window.location.replace('#/tab/account');
  // };
});