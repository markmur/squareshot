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

  // like(event) {
  //   var classList = event.currentTarget.classList;
  //
  //   io.socket.post(`/photo/like/${this.props.id}`, res => {
  //     classList.add('liked');
  //   });
  // }

  render() {

    var { likes } = this.props;

    return (
      <button class={classNames('like-button', { liked: this.props.liked })}>
        <i class="icon-heart"></i> {Numeral(likes).format('0[.]0a')}
      </button>
    );
  }
}
