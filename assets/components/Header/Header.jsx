import React, { Component } from 'react';
import { Link } from 'react-router';
import LoginButton from 'components/LoginButton/LoginButton';
import Navigation from 'components/Navigation/Navigation';

class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    var current = this.props.current ? this.props.current.trim() : null;

    return (
      <header>
        <main>
          <div id="brand">
            <Link to="/">Squareshot</Link>
          </div>
          <div id="logo">
            <Link to="/">{current}</Link>
          </div>
          <div id="login">
        		<LoginButton />
        	</div>
        </main>
        <Navigation />
      </header>
    );
  }
}

export default Header;
