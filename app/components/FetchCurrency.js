var React = require('react');
var fixerHelpers = require('../utils/fixerHelpers');
var CurrencyForm = require('./CurrencyForm');
var Results = require('./Results');

function dateFormat(year, month, day) {
  return (new Date(year, month, day)).toJSON().substring(0, 10);
}

function calculateAmount(data, currency, amount) {
  return (data.rates[currency] * amount).toFixed(2);
}

var FetchCurrency = React.createClass({
  getInitialState: function() {
    var currencies = ['EUR', 'JPY', 'USD'];
    return {
      amount: 0,
      currencies: currencies,
      currency: currencies[0],
      data: [],
    };
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

    var years = [year - 3, year - 2, year - 1, year];
    var dates = years.map(function(year) {
      return dateFormat(year, month, day);
    });
    fixerHelpers.getCurrenciesInfo(dates)
      .then(function(info) {
        var data = info.map(function(currency, index) {
          var amount = calculateAmount(currency, this.state.currency, this.state.amount);
          var diff = 0;
          var foreignChange = 0;
          var localChange = 0;
          if (index > 0) {
            foreignChange = (amount - calculateAmount(info[index - 1], this.state.currency, this.state.amount)).toFixed(2);
            localChange = (foreignChange / currency.rates[this.state.currency]).toFixed(2);
          }
          return {
            name: this.state.currency,
            date: currency.date,
            amount: amount,
            foreignChange: foreignChange,
            localChange: localChange
          };
        }.bind(this));
        this.drawChart(data, this.state.currency);
        this.setState({data: data});
      }.bind(this));
  },
  drawChart: function(chartData, currency) {
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var dataTable = chartData.map(function(chart) {
        return [chart.date, parseFloat(chart.amount)];
      });
      dataTable.splice(0, 0, ['Date', currency + ' Amount']);
      var data = google.visualization.arrayToDataTable(dataTable);

      var options = {
        title: 'Currency Flux',
        curveType: 'function',
        legend: { position: 'bottom' }
      };

      var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
      chart.draw(data, options);
    }
  },
  render: function() {
    return (
      <div className='container'>
        <CurrencyForm
          currencies={this.state.currencies}
          currency={this.state.currency}
          amount={this.state.amount}
          handleCurrencyChange={this.handleCurrencyChange}
          handleAmountChange={this.handleAmountChange}
          handleFetch={this.handleFetch}
        />
        <Results data={this.state.data} />
      </div>
    );
  }
});

module.exports = FetchCurrency;
