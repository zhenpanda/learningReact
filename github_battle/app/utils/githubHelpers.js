var axios = require('axios');

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username);
}

/*
The Promise.all(iterable) method returns a promise that resolves when all of the promises in the iterable argument have resolved, or rejects with the reason of the first passed promise that rejects.

*/
var helpers = {
  getPlayersInfo: function(players) {
    return axios.all(players.map(function(username){
      return getUserInfo(username)
    })).then(function(info) {
      //data
      //console.log('Info', info)
      return info.map(function(user) {
        return user.data
      })
    }).catch(function(err) {
      console.warn('error', err)
    })
  }
};

module.exports = helpers;
