import React, {Component} from 'react';
import UserProfileInfo from 'components/UserProfileInfo/UserProfileInfo';
import InstagramPhotos from 'components/InstagramPhotos/InstagramPhotos';

export default class PhotosPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <InstagramPhotos url={this.props.route.path} />
      </div>
    );
  }
}
