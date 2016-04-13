import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer>
      	<h2 className="brand-font">Squareshot</h2>
      	<p>Built with ♥ by <a href="http://markmurray.co">Mark Murray</a> with React & Instagram.</p>
      	<small>Copyright {new Date().getYear()} &copy; Mark Murray</small>
      </footer>
    );
  }
}

export default Footer;
