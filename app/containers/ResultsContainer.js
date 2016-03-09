var React = require('react');
var Results = require('../components/Results');

var ResultsContainer = React.createClass({
  getInitialState: function() {
    return {data: [
      {year: 2014, amount: 12},
      {year: 2015, amount: 20},
      {year: 2016, amount: 50}
    ]};
  },
  render: function() {
    return (
      <Results data={this.state.data}/>
    )
  }
});

module.exports = ResultsContainer;
