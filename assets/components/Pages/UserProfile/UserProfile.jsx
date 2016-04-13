import React, { Component } from 'react';
import Utils from 'utils';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import UserProfileInfo from 'components/UserProfileInfo/UserProfileInfo';
import InstagramPhotos from 'components/InstagramPhotos/InstagramPhotos';

class UserProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate() {
    console.info('Component updated!');
  }

  getProfile() {
    var url = `/photo/user/${this.props.params.username}`;

    if (this.props.params.id) {
      url += `/${this.props.params.id}`;
    }

    fetch(url)
      .then(Utils.getJSON)
      .then(res => {
        console.log(res);
        this.setState({
          user: res.user,
          photos: res.photos,
        });
      });
  }

  componentDidMount() {
    this.getProfile();
  }

  componentWillReceiveProps() {
    this.setState({ photos: [] });
    this.getProfile();
  }

  render() {

    var user = this.state.user || {};

    var username = user.full_name || user.username;

    return (
      <div>

        <Header current={username || this.props.params.username} />

        <div className="content">
          <UserProfileInfo user={this.state.user} />
          <InstagramPhotos photos={this.state.photos} />
        </div>

        <Footer></Footer>
      </div>
    );
  }
}

export default UserProfile;
