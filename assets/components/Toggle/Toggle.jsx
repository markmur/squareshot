import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Toggle extends Component {

  // static contextTypes = {
  //   active: React.PropTypes.bool.isRequired,
  //   onToggle: React.PropTypes.func.isRequired,
  // };

  constructor(props) {
    super(props);

    this.state = {
      checked: this.props.checked,
    };
  }

  componentWillReceiveProps(props) {
    if ('active' in props) {
      this.setState({ checked: !!props.active });
    }
  }

  handleClick(e) {
    this.setState({ checked: !this.state.checked });
    this.props.onChange();
  }

  render() {
    return (
      <div class="toggle-button">
        <input ref='input' id="toggle" type='checkbox' defaultChecked={this.state.checked} onChange={this.handleClick.bind(this)} />
        <label for="toggle">{this.props.label}</label>
      </div>
    );
  }
}
