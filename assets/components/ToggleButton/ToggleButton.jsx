import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ToggleButton extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input class='tgl tgl-flat' id="toggle-button-1" type='checkbox' />
        <label class='tgl-btn' for='toggle-button-1'></label>
      </div>
    );
  }
}
