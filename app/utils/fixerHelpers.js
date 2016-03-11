var axios = require('axios');

function getCurrencyInfo(date) {
  return axios.get('https://api.fixer.io/' + date + '?base=CAD');
}

var helpers = {
  getCurrenciesInfo: function(dates) {
    return axios.all(dates.map(function(date) {
      return getCurrencyInfo(date);
    }))
    .then(function(info) {
      return info.map(function(currency) {
        return currency.data;
      })
    })
    .catch(function(err) {
      console.warn('Error in getCurrenciesInfo: ', err);
    })
  }
};

module.exports = helpers;
