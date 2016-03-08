// http://fixer.io/
var axios = require('axios');

var helpers = {
  getCurrencyInfo: function() {
    return axios.get('https://api.fixer.io/latest');
  }
}

module.exports = helpers;
