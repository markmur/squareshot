import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Loader extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="loader-container">
        <div class="circular-loader"></div>
      </div>
    );
  }
}
