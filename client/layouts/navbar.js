import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <nav className="nav navbar-custome">
        <div className="navbar-header">
          <div className="navbar-brand">App</div>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
