var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

google.charts.load('current', {'packages':['corechart']});

ReactDOM.render(
  routes,
  document.getElementById('app')
);
