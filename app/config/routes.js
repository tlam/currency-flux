var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');

var routes = (
  <Router>
    <Route path='/' component={Main} />
  </Router>
);

module.exports = routes;
