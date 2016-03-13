var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Main = require('./components/Main');

google.charts.load('current', {'packages':['corechart']});

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);
