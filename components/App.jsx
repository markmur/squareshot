var React = require('react');
var Router = require('react-router');
var Routes = require('./Routes');

Router.run(require(Routes, Router.HistoryLocation, (Root) => {
  React.render(<Root {...window.__ReactInitState__} />, document.body);
  delete window.__ReactInitState__;
});
