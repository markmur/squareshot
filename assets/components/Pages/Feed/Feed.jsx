import React, { Component } from 'react';
import Utils from 'utils';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import InstagramPhotos from 'components/InstagramPhotos/InstagramPhotos';

export default class Feed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      pagination: {},
    };
  }

  getFeed() {
    fetch('/photo/feed')
      .then(Utils.getJSON)
      .then(res => {
        console.log(res);
        this.setState({
          photos: res.data,
          pagination: res.pagination || {},
        });
      }, err => console.warn(JSON.parse(err)));
  }

  componentDidMount() {
    this.getFeed();
  }

  componentWillReceiveProps(props) {
    console.log('Component received some new props!', props);
    this.getFeed();
  }

  render() {
    return (
      <div>
        <Header current="Feed" />

        <div className="content">
          <InstagramPhotos photos={this.state.photos} pagination={this.state.pagination} />
        </div>

        <Footer />
      </div>
    );
  }
}
