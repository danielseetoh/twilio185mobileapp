// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.tips', {
      url: '/tips',
      views: {
        'tab-tips': {
          templateUrl: 'templates/tab-tips.html',
          controller: 'TipsCtrl'
        }
      }
    })
    .state('tab.tip-detail', {
      url: '/tips/:tipId',
      views: {
        'tab-tips': {
          templateUrl: 'templates/tip-detail.html',
          controller: 'TipDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })

  .state('tab.edit-emergency-number', {
    url: '/account/edit-emergency-number',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-edit-emergency-number.html',
        controller: 'EditEmergencyCtrl'
      }
    }
  })
  .state('tab.edit-phone-number', {
    url: '/account/edit-phone-number',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-edit-phone-number.html',
        controller: 'EditPhoneCtrl'
      }
    }
  })
  .state('tab.edit-name', {
    url: '/account/edit-name',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-edit-name.html',
        controller: 'EditNameCtrl'
      }
    }
  })
  .state('tab.donation', {
    url: '/donation',
    views: {
      'tab-donation': {
        templateUrl: 'templates/tab-donation.html',
        controller: 'DonationCtrl'
      }
    }
  })
  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
