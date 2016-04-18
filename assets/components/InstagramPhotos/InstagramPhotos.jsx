import React, { Component } from 'react';
import {State} from 'react-router';
import InstagramPhoto from 'components/InstagramPhoto/InstagramPhoto';
import UserProfileInfo from 'components/UserProfileInfo/UserProfileInfo';
import Loader from 'components/Loader/Loader';

class InstagramPhotos extends Component {

  constructor(props) {
    super(props);

    this.state = {
      photos: [],
    };
  }

  getPhotos(url) {
    this.setState({
      photos: [],
      user: null,
    });

    io.socket.get(url, res => {
      this.setState({
        user: res.user,
        photos: res.data,
        pagination: res.pagination || {},
      });
    });
  }

  resolveUrl(path, params) {
    var url;

    switch (path) {
      case 'popular':
        url = '/photo/popular';
        break;
      case 'feed':
        url = '/photo/feed';
        break;
      case 'user/:username':
        url = `/photo/user/${params.username}`;
        break;
      case 'hashtag/:hashtag':
        url = `/photo/hashtag/${params.hashtag}`;
        break;
    }

    this.getPhotos(url);
  }

  componentDidMount() {
    this.resolveUrl(this.props.url, this.props.params);
  }

  componentWillReceiveProps(props) {
    this.resolveUrl(props.url, props.params);
  }

  componentDidReceiveProps(props) {
    this.resolveUrl(props.url, props.params);
  }

  render() {
    var { photos } = this.state;
    var elements;

    if (photos && photos.length) {
      elements = photos.map(photo =>
        <InstagramPhoto key={photo.id} photo={photo} />
      );
    } else {
      elements = <Loader />;
    }

    var user = this.state.user ? <UserProfileInfo user={this.state.user} /> : '';

    return (
      <div class="content">
        {user}
        <div id="instafeed">
          {elements}
        </div>
      </div>
    );
  }
}

export default InstagramPhotos;
