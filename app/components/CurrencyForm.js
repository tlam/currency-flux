var React = require('react');
var PropTypes = React.PropTypes;

var CurrencyForm = React.createClass({
  render: function() {
    return (
      <form className='form-inline'>
        <div className='form-group'>
          <label htmlFor='currencies'>Currency:</label>
          <select id='currencies' className='form-control' onChange={this.props.handleCurrencyChange} value={this.props.currency}>
            <option val='EUR'>EUR</option>
            <option val='JPY'>JPY</option>
            <option val='USD'>USD</option>
          </select>
        </div>
        <div className='form-group'>
          <div className='input-group'>
            <div className='input-group-addon'>CAD</div>
            <input
              type='text'
              id='amount'
              className='form-control'
              name='amount'
              value={this.props.amount}
              onChange={this.props.handleAmountChange} />
            </div>
        </div>
        <button
          type='button'
          className='btn btn-primary'
          onClick={this.props.handleFetch}>
            Fetch
        </button>
      </form>
    );
  }
});

CurrencyForm.PropTypes = {
  currency: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  handleCurrencyChange: PropTypes.func.isRequired,
  handleAmountChange: PropTypes.func.isRequired,
  handleFetch: PropTypes.func.isRequired
};

module.exports = CurrencyForm;
