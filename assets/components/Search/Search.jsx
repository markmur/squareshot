import React, {Component} from 'react';
import {Link} from 'react-router';
import _ from 'lodash';
import classNames from 'classnames';
import Toggle from 'components/Toggle/Toggle';

class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      results: [],
      query: 'hashtag',
      value: null,
      visible: false,
      buttons: [
        { type: 'hashtag', name: 'Hashtags' },
        { type: 'user', name: 'Users' },
        { type: 'place', name: 'Places' },
      ],
    };
  }

  search() {
    var { query, value } = this.state;

    if (!value) return;

    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    this.timeout = setTimeout(() => {
      console.info(`Searching for ${value}`);
      io.socket.get(`/photo/search?${query}=${value}`, res => {
        console.log(res);
        this.setState({ results: res.data, visible: true });
      });
    }, 300);
  }

  returnResults() {
    var { results, query } = this.state;

    if (!results) return null;

    switch (query) {
      case 'hashtag':
        return this.state.results.map(result =>
          <li key={result.name}>
            <Link to={`/hashtag/${result.name}`}>#{result.name}</Link>
          </li>
        );
        break;
      case 'user':
        return this.state.results.map(result =>
          <li key={result.id}>
            <Link to={`/user/${result.username}`}>
              <img width="40" height="40" src={result.profile_picture} />
              <strong>@{result.username}</strong>
            </Link>
          </li>
        );
        break;
    }
  }

  handleSearch(event) {
    var val = event.target.value;

    if (val && val !== this.state.value) {
      this.setState({
        value: val,
      }, () => {
        console.info('Searching for', this.state.value);
        this.search(this.state.query, this.state.value);
      });
    } else {
      this.clearResults();
    }
  }

  clearResults() {
    this.setState({
      value: null,
      results: [],
    });
  }

  handleQueryChange(event) {
    var query = event.target.getAttribute('type');
    this.setState({
      query,

      // results: []
    });
    if (this.state.value) {
      this.search();
    }
  }

  handleBlur() {
    setTimeout(() => {
      this.setState({ visible: false });
    }, 50);
  }

  handleFocus() {
    this.setState({ visible: true });
  }

  render() {

    var { store } = this.context;

    return (
      <div class="navigation">
        <div className="search">
          <input
            onChange={this.handleSearch.bind(this)}
            onBlur={this.handleBlur.bind(this)}
            onFocus={this.handleFocus.bind(this)}
            id="search-hashtag"
            type="search"
            placeholder={`Search ${this.state.query}s...`}/>
          <div class={classNames('results', { hidden: !this.state.visible })}>
            <ul>
              {this.returnResults()}
            </ul>
          </div>
        </div>
        <div className="search-buttons">
          {this.state.buttons.map(button =>
            <button
              key={button.type}
              type={button.type}
              class={button.type === this.state.query ? 'active' : ''}
              onClick={this.handleQueryChange.bind(this)}>{button.name}</button>)}
        </div>
        <div className="extra-buttons">
          <Link to="/">Popular</Link>
          <Link to="/feed">Feed</Link>
        </div>
        <Toggle
          label={'Hide Captions'}
          checked={store.getState().captionsHidden}
          onChange={store.dispatch.bind(store, { type: 'TOGGLE_CAPTIONS' })} />
      </div>
    );
  }
}

Search.contextTypes = {
  store: React.PropTypes.object.isRequired,
};

export default Search;
