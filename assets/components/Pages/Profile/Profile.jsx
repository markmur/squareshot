import React, { Component } from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import InstagramPhotos from 'components/InstagramPhotos/InstagramPhotos';

class Profile extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header current="Popular" />

        <div className="content">
          <InstagramPhotos />
        </div>

        <Footer />
      </div>
    );
  }
}

export default Profile;
