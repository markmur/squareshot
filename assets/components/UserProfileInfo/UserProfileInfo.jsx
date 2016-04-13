import React, { Component } from 'react';
import { Link } from 'react-router';
import Numeral from 'numeral';
import Loader from 'components/Loader/Loader';

export default class UserProfileInfo extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    var { user } = this.props;

    return (
      this.props.user ?
      <div id="profile">
      	<img src={user.profile_picture} />
      	<Link to="/profile" class="username">@{user.username}</Link>
      	<p class="bio">{user.bio}</p>
        <a class="website" target="_blank">{user.website}</a>
      	<ul class="media-info">
        	<li>
    			<small>Photos</small>
    			<strong>{Numeral(user.counts.media).format('0[.]0a')}</strong>
        	</li>
          <li>
            <Link to="followers">
              <small>Followers</small>
              <strong>{Numeral(user.counts.followed_by).format('0[.]0a')}</strong>
            </Link>
          </li>
        	<li>
        		<Link to="following">
        			<small>Following</small>
        			<strong>{Numeral(user.counts.follows).format('0[.]0a')}</strong>
        		</Link>
        	</li>
        </ul>
      </div> : null
    );
  }
}
