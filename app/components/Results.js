var React = require('react');
var PropTypes = React.PropTypes;

var Results = React.createClass({
  render: function() {
    var resultNodes = this.props.data.map(function(currency) {
      return (
        <div className='col-md-2' key={currency.year}>
          <h3>{currency.year}</h3>
          <div>{currency.amount}</div>
        </div>
      )
    });
    return (
      <div className='row'>
        {resultNodes}
      </div>
    )
  }
});

Results.propTypes = {
  data: PropTypes.array.isRequired
}

module.exports = Results;
