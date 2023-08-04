import React from 'react';
import logo from '../logo.svg';

function Header(props) {
    return (
        <>
          <img src={logo} className="App-logo-left" alt="logo" />
          <img src={logo} className="App-logo-right" alt="logo" />
          <h1 className='App-header'>Shebab Omran's Website</h1>
        </>
    );
}

export default Header;