import React, {Component} from 'react';
import {Link} from 'react-router';
import Utils from 'utils';
import _ from 'lodash';

export default class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      results: [],
      query: 'hashtag',
      value: null,
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
      fetch(`/photo/search?${query}=${value}`).then(Utils.getJSON).then(res => {
        console.log(res);
        this.setState({ results: res.data });
      });
    }, 300);
  }

  returnResults() {
    var { results, query } = this.state;

    if (!results) return null;

    switch (query) {
      case 'hashtag':
        return this.state.results.map(result => {
          return <li key={result.name}><Link to={`hashtag/${result.name}`}>#{result.name}</Link></li>;
        });
        break;
      case 'user':
        return this.state.results.map(result => {
          return <li key={result.id}><Link to={`user/${result.username}`}><img src={result.profile_picture} /><strong>@{result.username}</strong></Link></li>;
        });
        break;
    }
  }

  handleSearch(event) {
    if (event.target.value) {
      this.setState({
        value: event.target.value,
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

  render() {
    return (
      <div>
        <div className="search">
          <input
            onChange={this.handleSearch.bind(this)}
            id="search-hashtag"
            type="search"
            placeholder={`Search ${this.state.query}s...`}/>
          <div className="results">
            <ul>
              {this.returnResults()}
            </ul>
          </div>
        </div>
        <div className="search-buttons">
          {this.state.buttons.map(button => {
            return <button key={button.type} type={button.type} class={button.type === this.state.query ? 'active' : ''} onClick={this.handleQueryChange.bind(this)}>{button.name}</button>;
          })}
        </div>
      </div>
    );
  }
}
