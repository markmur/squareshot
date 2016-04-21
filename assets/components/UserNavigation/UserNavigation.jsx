import React, { Component } from 'react';
import { Link } from 'react-router';
import Auth from 'services/auth';

export default class UserNavigation extends Component {
  constructor(props) {
    super(props);
  }

  logout() {
    Auth.logout();
  }

  render() {

    return (
      <ul>
        <li><Link to={`user/${this.props.username}`}>My Profile</Link></li>
        <li><Link to="/feed">My Feed</Link></li>
        <li><Link to="/liked">Liked</Link></li>
        <li onClick={this.logout.bind(this)}><a type="button">Logout</a></li>
      </ul>
    );
  }
}
