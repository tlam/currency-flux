var React = require('react');
var FetchCurrencyContainer = require('../containers/FetchCurrencyContainer');
var ResultsContainer = require('../containers/ResultsContainer');

var Main = React.createClass({
  render: function() {
    return (
      <div className='main-container'>
        <h1>Hello, world!</h1>
        <FetchCurrencyContainer />
        <ResultsContainer />
      </div>
    )
  }
});

module.exports = Main;
