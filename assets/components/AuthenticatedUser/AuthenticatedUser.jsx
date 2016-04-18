import React, { Component } from 'react';
import { Link } from 'react-router';
import ListenToClickOutside from 'react-onclickoutside/decorator';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import UserNavigation from 'components/UserNavigation/UserNavigation';

class AuthenticatedUser extends Component {

  constructor(props) {
    super(props);

    this.state = {
      navVisible: false,
    };
  }

  handleClickOutside() {
    this.setState({
      navVisible: false,
    });
  }

  toggleNav() {
    this.setState({
      navVisible: !this.state.navVisible,
    });
  }

  isVisible() {
    return this.state.navVisible === true ? 'active' : '';
  }

  render() {
    var { user } = this.props;
    var nav;

    nav = this.state.navVisible ? <UserNavigation username={user.username} /> : '';

    return (
      <div id="loggedin">
        <div id="userbutton" class={this.isVisible()}
          onClick={this.toggleNav.bind(this)}>
          <a type="button">
    			  <img class="userphoto" src={user.profile_picture} />
            <div class="username">@{user.username}</div>
    			</a>
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionLeaveTimeout={0}
            transitionEnterTimeout={0}>
            {nav}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default ListenToClickOutside(AuthenticatedUser);
