import React, { Component } from 'react';
import { Link } from 'react-router';

import Settings from 'services/settings';
import Search from 'components/Search/Search';
import Toggle from 'components/Toggle/Toggle';

export default class Navigation extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <Search />
        <div className="extra-buttons">
          <Link to="/">Popular</Link>
          <Link to="/feed">Feed</Link>
        </div>
      {/* <Toggle checked={Settings.captionsHidden()} onChange={Settings.toggleCaptions} /> */}
      </nav>
    );
  }
}
