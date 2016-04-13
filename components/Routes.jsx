'use strict';

import React from 'react';
import { RouteHandler, Route } from 'react-router';
import Popular from './pages/Popular/Popular';

module.exports = (
  <Route handler={RouteHandler}>
    <Route name="home" path="/" handler={Popular} />
  </Route>
);
