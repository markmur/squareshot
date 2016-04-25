import 'styles/main.scss';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory, browserHistory, IndexRoute, IndexRedirect } from 'react-router';

// Store
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Settings from 'reducers/settings';
var store = createStore(Settings);

// Components
import App from 'components/App/App';
import PhotosPage from 'components/Pages/PhotosPage/PhotosPage';
import NotFound from 'components/NotFound/NotFound';

console.log(store);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/popular" />
        <Route path="popular" component={PhotosPage} />
        <Route path="feed" component={PhotosPage} />
        <Route path="hashtag/:hashtag" component={PhotosPage} />
        <Route path="user/:username" component={PhotosPage} />
        <Route path="profile" component={PhotosPage} />
        <Route path="liked" component={PhotosPage} />
      </Route>
      <Route path="/*" component={NotFound}></Route>
    </Router>
  </Provider>, document.getElementById('app'));
