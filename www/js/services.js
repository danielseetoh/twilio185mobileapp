angular.module('starter.services', [])

.factory('Tips', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var tips = [{
    id: 0,
    name: 'Cardiac Arrest',
    information: 'Perform CPR Instructions here.',
  }, {
    id: 1,
    name: 'Severe Bleeding',
    information: 'Stop Bleeding Instructions here.',
  }, {
    id: 2,
    name: 'Choking',
    information: 'Choking Instructions here.',
  }, {
    id: 3,
    name: 'Faint',
    information: 'Fainting Instructions here.',
  }, {
    id: 4,
    name: 'Spinal Injury',
    information: 'Spinal Injury Instructions here.',
  }];

  return {
    all: function() {
      return tips;
    },
    remove: function(tip) {
      tips.splice(tips.indexOf(tip), 1);
    },
    get: function(tipId) {
      for (var i = 0; i < tips.length; i++) {
        if (tips[i].id === parseInt(tipId)) {
          return tips[i];
        }
      }
      return null;
    }
  };
});
