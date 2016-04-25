import React, { Component } from 'react';
import { Link } from 'react-router';
import Numeral from 'numeral';
import LikeButton from 'components/LikeButton/LikeButton';
import classNames from 'classnames';

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

    return caption;
  }

  render() {
    var { hideCaptions, photo } = this.props;
    var caption;
    var content;

    if (photo.caption && photo.caption.text) {
      caption = this.formatCaption(photo.caption.text);
    }

    if (photo.type === 'image') {
      content =
        <img
          src={photo.images.standard_resolution.url}
          width={photo.images.standard_resolution.width}
          height={photo.images.standard_resolution.height} />;
    } else if (photo.type === 'video') {
      content =
        <video
          controls
          style={{ maxWidth: '100%' }}>
          <source src={photo.videos.standard_resolution.url} />
        </video>;
    }

    return (
      <div class="image" data-media-id="{photo.id}">
        <div class="image-info">
          <Link to={`/user/${photo.user.username}`} title={photo.user.username} class="username" href={photo.user.username}>
            @{photo.user.username}
          </Link>
          <div class="action-buttons">
            <LikeButton likes={photo.likes.count} id={photo.id} liked={photo.user_has_liked}/>

            <button class="comments-button">
              <i class="icon-speech-bubble"></i> {Numeral(photo.comments.count).format('0[.]0a')}
            </button>
          </div>
        </div>
        <div class="image-content">
          {content}
        </div>

        <p class={classNames('caption', { hidden: hideCaptions })}>{caption}</p>
			</div>
    );
  }
}

export default InstagramPhoto;
