import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer>
      	<h2 className="brand-font">Squareshot</h2>
      	<p>Built with ♥ by <a href="https://github.com/markmur" target="_blank">Mark Murray</a> with <a href="https://sailsjs.org" target="_blank">Sails</a>, <a href="https://facebook.github.io/react/" target="_blank">React</a> & the Instagram API.</p>
      	<small>Copyright {new Date().getFullYear()} &copy; Mark Murray</small>
      </footer>
    );
  }
}

export default Footer;
