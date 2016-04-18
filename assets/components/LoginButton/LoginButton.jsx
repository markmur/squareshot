import React, { Component } from 'react';
import $ from 'jquery';
import URL from 'url';

class LoginButton extends Component {

  constructor(props) {
    super(props);
  }

  login(event) {

    var options = {
      protocol: 'https:',
      host: 'api.instagram.com/oauth/authorize',
      query: {
        client_id: 'dcb4dc592b6e442db2f296e166fe375b',
        redirect_uri: 'http://localhost:3000/user/auth',
        response_type: 'code',
        scope: 'likes+comments+relationships',
      },
    };

    window.location = URL.format(options);
  }

  render() {
    return (
      <div id="login">
        <a href="https://api.instagram.com/oauth/authorize/?client_id=dcb4dc592b6e442db2f296e166fe375b&redirect_uri=http://localhost:3000/user/auth&response_type=code&scope=likes+comments+relationships">
          <i className="social-instagram"></i>
          Login with Instagram
        </a>
      </div>
    );
  }
}

export default LoginButton;
