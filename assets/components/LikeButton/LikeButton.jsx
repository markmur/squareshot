import React, { Component } from 'react';
import Numeral from 'numeral';
import classNames from 'classnames';

export default class LikeButton extends Component {

  static propTypes = {
    likes: React.PropTypes.number.isRequired,
    id: React.PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {

    var { likes } = this.props;

    return (
      <button class={classNames('like-button', { liked: this.props.liked })}>
        <i class={classNames({
          'icon-heart': !this.props.liked,
          'icon-heart-filled': this.props.liked,
        })}></i> {Numeral(likes).format('0[.]0a')}
      </button>
    );
  }
}
