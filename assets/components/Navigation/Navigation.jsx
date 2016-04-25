import React, { Component } from 'react';
import { Link } from 'react-router';

import Settings from 'services/settings';
import Search from 'components/Search/Search';
import Toggle from 'components/Toggle/Toggle';

class Navigation extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    var { store } = this.context;

    return (
      <nav>
        <Search />
      </nav>
    );
  }
}

Navigation.contextTypes = {
  store: React.PropTypes.object.isRequired,
};

export default Navigation;
