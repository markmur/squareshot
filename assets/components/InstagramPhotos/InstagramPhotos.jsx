import React, { Component } from 'react';
import InstagramPhoto from 'components/InstagramPhoto/InstagramPhoto';
import Utils from 'utils';
import $ from 'jQuery';
import Loader from 'components/Loader/Loader';

export default class InstagramPhotos extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    var photos;

    if (this.props.photos && this.props.photos.length) {
      photos = this.props.photos.map(photo => {
        return (
          <InstagramPhoto key={photo.id} photo={photo} />
        );
      });
    } else {
      photos = <Loader />;
    }

    return (
      <div id="instafeed">
        {photos}
      </div>
    );
  }
}
