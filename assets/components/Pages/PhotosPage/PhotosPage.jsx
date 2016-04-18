import React, {Component} from 'react';
import InstagramPhotos from 'components/InstagramPhotos/InstagramPhotos';

export default class PhotosPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    var { route, routeParams } = this.props;

    return (
      <div>
        <InstagramPhotos url={route.path} params={routeParams} />
      </div>
    );
  }
}
