import React, { Component } from 'react';
import { Link } from 'react-router';
import Search from 'components/Search/Search';
import ToggleButton from 'components/ToggleButton/ToggleButton';

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
          <Link to="feed">Feed</Link>
        </div>
      </nav>
    );
  }
}
