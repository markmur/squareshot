import React, { Component } from 'react';
import { State } from 'react-router';
import InstagramPhoto from 'components/InstagramPhoto/InstagramPhoto';
import UserProfileInfo from 'components/UserProfileInfo/UserProfileInfo';
import Loader from 'components/Loader/Loader';
import Settings from 'services/settings';
import InfiniteScroll from 'components/InfiniteScroll/InfiniteScroll';

class InstagramPhotos extends Component {

  constructor(props) {
    super(props);

    this.state = {
      photos: [],
    };
  }

  getPhotos() {
    this.setState({
      photos: [],
      user: null,
    });

    io.socket.get(this.state.url, res => {
      console.log(res.pagination);

      this.setState({
        user: res.user,
        photos: res.data,
        pagination: res.pagination || {},
      });
    });
  }

  appendPhotos() {
    if (this.state.photos.length && this.state.pagination) {
      var { url } = this.state;
      var next = this.state.pagination.next_max_id;

      url += '?next_max_id=' + next;

      console.debug('FETCHING NEXT PAGE', url);

      io.socket.get(url, res => {

        console.log(res.data);

        var photos = this.state.photos.concat(res.data);
        this.setState({
          photos,
          pagination: res.pagination,
        });
      });
    }
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
      case 'liked':
        url = `/photo/liked`;
        break;
    }

    this.setState({ url }, this.getPhotos);
  }

  componentDidMount() {
    this.resolveUrl(this.props.url, this.props.params);

    this.context.store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillReceiveProps(props) {
    this.resolveUrl(props.url, props.params);
  }

  componentDidReceiveProps(props) {
    this.resolveUrl(props.url, props.params);
  }

  render() {
    var { photos } = this.state;
    var { store } = this.context;
    var state = store.getState();

    var elements;

    if (photos && photos.length) {
      elements = photos.map(photo =>
        <InstagramPhoto key={photo.id} photo={photo} hideCaptions={state.captionsHidden} />
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

InstagramPhotos.contextTypes = {
  store: React.PropTypes.object.isRequired,
};

export default InstagramPhotos;
