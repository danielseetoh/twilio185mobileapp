angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
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
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
