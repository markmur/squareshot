import 'styles/main.scss';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory, browserHistory, IndexRoute, IndexRedirect } from 'react-router';

import App from 'components/App/App';
import PhotosPage from 'components/Pages/PhotosPage/PhotosPage';
import NotFound from 'components/NotFound/NotFound';

render(
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
  </Router>, document.getElementById('app'));
