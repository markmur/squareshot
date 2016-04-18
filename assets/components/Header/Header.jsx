import React, { Component } from 'react';
import { Link } from 'react-router';
import LoginButton from 'components/LoginButton/LoginButton';
import Navigation from 'components/Navigation/Navigation';
import AuthenticatedUser from 'components/AuthenticatedUser/AuthenticatedUser';

class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    var current = this.props.current ? this.props.current.trim() : null;

    var { authenticated, user } = this.props;

    var loginState;

    if (authenticated) {
      loginState = <AuthenticatedUser user={user} />;
    } else {
      loginState = <LoginButton />;
    }

    return (
      <header>
        <main>
          <div id="brand">
            <Link to="/">Squareshot</Link>
          </div>
          <div id="logo">
            <Link to="/">{current}</Link>
          </div>

        	{loginState}
        </main>
        <Navigation />
      </header>
    );
  }
}

export default Header;
