var React = require('react');
var fixerHelpers = require('../utils/fixerHelpers');
var Results = require('./Results');

function dateFormat(year, month, day) {
  return (new Date(year, month, day)).toJSON().substring(0, 10);
}

var FetchCurrency = React.createClass({
  getInitialState: function() {
    return {
      amount: 0,
      currency: 'EUR',
      data: [],
    }
  },
  handleCurrencyChange: function(e) {
    this.setState({currency: e.target.value});
  },
  handleAmountChange: function(e) {
    this.setState({amount: e.target.value});
  },
  handleFetch: function() {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
    var day = today.getDate();

    var years = [year - 2, year - 1, year];
    var dates = years.map(function(year) {
      return dateFormat(year, month, day);
    });
    fixerHelpers.getCurrenciesInfo(dates)
      .then(function(info) {
        var data = info.map(function(currency, index) {
          return {
            name: this.state.currency,
            date: currency.date,
            amount: (currency.rates[this.state.currency] * this.state.amount).toFixed(2)
          }
        }.bind(this));
        this.setState({data: data});
      }.bind(this));
  },
  render: function() {
    return (
      <div className='container'>
        <form className='form-inline'>
          <div className='form-group'>
            <label htmlFor='currencies'>Currency:</label>
            <select id='currencies' className='form-control' onChange={this.handleCurrencyChange} value={this.state.currency}>
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
                value={this.state.amount}
                onChange={this.handleAmountChange} />
              </div>
          </div>
          <button
            type='button'
            className='btn btn-primary'
            onClick={this.handleFetch}>
              Fetch
          </button>
        </form>
        <Results data={this.state.data} />
      </div>
    )
  }
});

module.exports = FetchCurrency;
