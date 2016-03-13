var React = require('react');
var FetchCurrency = require('./FetchCurrency');

var Main = React.createClass({
  render: function() {
    return (
      <div className='main-container'>
        <FetchCurrency />
        <div id='curve_chart'></div>
      </div>
    );
  }
});

module.exports = Main;
