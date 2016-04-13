import React, { Component } from 'react';
import { Link } from 'react-router';
import Numeral from 'numeral';

class InstagramPhoto extends Component {

  constructor(props) {
    super(props);
  }

  formatCaption(caption) {
    const re = /(\@\w+)/g;

    caption = caption.split(re);

    caption = caption.map(word => {
      if (word.length && word.match(re) && word.match(re).length) {
        word = word.replace('@', '');
        return <Link to={`/user/${word}`}>@{word}</Link>;
      } else return word;
    });

    return <p class='caption'>{caption}</p>;
  }

  like(event) {
    event.currentTarget.classList.toggle('liked');
    return this;
  }

  render() {
    var photo = this.props.photo;
    var caption;

    if (photo.caption && photo.caption.text) {
      caption = this.formatCaption(photo.caption.text);
    } else {
      caption = <p class="caption"></p>;
    }

    return (
      <div class="image" data-media-id="{photo.id}">
        <div class="image-info">
          <Link to={`/user/${photo.user.username}`} title={photo.user.username} class="username" href={photo.user.username}>
            @{photo.user.username}
          </Link>
          <div class="action-buttons">
            <button class="like-button" onClick={this.like.bind(this)}>
              <i class="icon-heart"></i> {Numeral(photo.likes.count).format('0[.]0a')}
            </button>

            <button class="comments-button">
              <i class="icon-speech-bubble"></i> {Numeral(photo.comments.count).format('0[.]0a')}
            </button>
          </div>
        </div>
        <div class="image-content">
          <img
            src={photo.images.standard_resolution.url}
            width={photo.images.standard_resolution.width}
            height={photo.images.standard_resolution.height} />
        </div>

        {caption}
			</div>
    );
  }
}

export default InstagramPhoto;
