import React, { Component } from 'react';
import Auth from 'services/auth';
import Router, { Link, RouteHandler } from 'react-router';

// Components
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      authenticated: false,
    };
  }

  setStateOnAuth(loggedIn) {
    Auth.isLoggedIn(res => {
      var { authenticated, user } = res;
      this.setState({
        authenticated, user,
      });
    });
  }

  componentWillMount() {
    Auth.onChange = this.setStateOnAuth;

    Auth.isLoggedIn(res => {
      this.setState({
        authenticated: res.authenticated,
        user: res.user,
      });
    });
  }

  render() {
    var route = this.props.location.pathname;
    var current;
    console.debug('route', route);
    switch (true) {
      case /user/.test(route): current = this.props.params.username; break;
      case /hashtag/.test(route): current = this.props.params.hashtag; break;
      case /feed/.test(route): current = 'Feed'; break;
      case /(popular|\/$)/.test(route): current = 'Popular'; break;
      case /liked/.test(route): current = 'Liked Photos'; break;
    }

    var { authenticated, user } = this.state;

    return (
      <div>
        <Header current={current} {...this.state} />
          {this.props.children}
        <Footer />
      </div>
    );
  }
}
