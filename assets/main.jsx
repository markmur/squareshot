import 'styles/main.scss';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory, browserHistory, IndexRoute } from 'react-router';

import Popular from 'components/Pages/Popular/Popular';
import Feed from 'components/Pages/Feed/Feed';
import UserProfile from 'components/Pages/UserProfile/UserProfile';
import Profile from 'components/Pages/Profile/Profile';
import Hashtag from 'components/Pages/Hashtag/Hashtag';
import NotFound from 'components/NotFound/NotFound';

render(
  <Router history={hashHistory}>
    <Route path="/" component={Popular}></Route>
    <Route path="/popular" component={Popular}></Route>
    <Route path="/user/:username" component={UserProfile}></Route>
    <Route path="/hashtag/:hashtag" component={Hashtag}></Route>
    <Route path="/profile" component={Profile}></Route>
    <Route path="/*" component={NotFound}></Route>
    <Route path="/feed" component={Feed}></Route>
  </Router>, document.getElementById('app'));
