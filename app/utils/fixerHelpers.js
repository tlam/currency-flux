var axios = require('axios');

var helpers = {
  getCurrencyInfo: function(date) {
    return axios.get('https://api.fixer.io/' + date + '?base=CAD');
  }
}

module.exports = helpers;
