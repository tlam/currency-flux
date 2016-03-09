var React = require('react');
var FetchCurrency = require('../components/FetchCurrency');
var fixerHelpers = require('../utils/fixerHelpers');

var FetchCurrencyContainer = React.createClass({
  handleFetch: function() {
    var date = (new Date()).toJSON().substring(0, 10);
    fixerHelpers.getCurrencyInfo(date)
      .then(function(info) {
        console.log(info);
      }.bind(this))
  },
  render: function() {
    return (
      <FetchCurrency
        onFetch={this.handleFetch} />
    )
  }
});

module.exports = FetchCurrencyContainer;
