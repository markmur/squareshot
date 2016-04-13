import React, { Component } from 'react';
import Utils from 'utils';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import InstagramPhotos from 'components/InstagramPhotos/InstagramPhotos';

export default class Hashtag extends Component {

  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      pagination: {},
    };
  }

  getPhotos() {
    fetch(`/photo/hashtag/${this.props.params.hashtag}`)
      .then(Utils.getJSON)
      .then(res => {
        console.log(res);
        this.setState({
          photos: res.data,
          pagination: res.pagination || {},
        });
      });
  }

  componentDidMount() {
    this.getPhotos();
  }

  componentWillReceiveProps() {
    this.getPhotos();
  }

  render() {
    return (
      <div>
        <Header current={`#${this.props.params.hashtag}`} />

        <div className="content">
          <InstagramPhotos photos={this.state.photos} pagination={this.state.pagination} />
        </div>

        <Footer />
      </div>
    );
  }
}
