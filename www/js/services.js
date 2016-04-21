angular.module('starter.services', [])

.factory('Tips', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var tips = [{
    id: 0,
    name: 'Allergies',
    information: 'Allergies Instructions here.',
    icon: 'ion-allergies'
  }, {
    id: 1,
    name: 'Asthma',
    information: 'Asthma Instructions here.',
    icon: 'ion-asthma'
  }, {
    id: 2,
    name: 'Bleeding',
    information: 'Bleeding Instructions here.',
    icon: 'ion-bleeding'
  }, {
    id: 3,
    name: 'Burns',
    information: 'Burns Instructions here.',
    icon: 'ion-burns'
  }, {
    id: 4,
    name: 'Cardiac Arrest',
    information: 'CPR Instructions here.',
    icon: 'ion-cardiacarrest'
  }, {
    id: 5,
    name: 'Choking',
    information: 'Choking Instructions here.',
    icon: 'ion-choking'
  }, {
    id: 6,
    name: 'Diabetic',
    information: 'Diabetic Instructions here.',
    icon: 'ion-diabetic'
  }, {
    id: 7,
    name: 'Epilepsy',
    information: 'Epilepsy Instructions here.',
    icon: 'ion-epilepsy'
  }, {
    id: 8,
    name: 'Fractures',
    information: 'Fractures Instructions here.',
    icon: 'ion-fractures'
  }, {
    id: 9,
    name: 'Heatstroke',
    information: 'Heatstroke Instructions here.',
    icon: 'ion-heatstroke'
  }, {
    id: 10,
    name: 'Hypothermia',
    information: 'Hypothermia Instructions here.',
    icon: 'ion-hypothermia'
  }, {
    id: 11,
    name: 'Insect Bites',
    information: 'Insect Bites Instructions here.',
    icon: 'ion-insectbites'
  }, {
    id: 12,
    name: 'Poisoning',
    information: 'Poisoning Instructions here.',
    icon: 'ion-poisoning'
  }, {
    id: 13,
    name: 'Sprain',
    information: 'Sprain Instructions here.',
    icon: 'ion-sprain'
  }, {
    id: 14,
    name: 'Stroke',
    information: 'Stroke Instructions here.',
    icon: 'ion-stroke'
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
