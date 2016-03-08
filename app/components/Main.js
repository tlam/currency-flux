var React = require('react');
var FetchCurrencyContainer = require('../containers/FetchCurrencyContainer');
var Results = require('./Results');

var Main = React.createClass({
  render: function() {
    return (
      <div className='main-container'>
        <h1>Hello, world!</h1>
        <FetchCurrencyContainer />
        <Results />
      </div>
    )
  }
});

module.exports = Main;
