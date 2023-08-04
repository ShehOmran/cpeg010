import React from 'react';
// import logo from '../logo.svg';

//function Header({ children, className }) {
  function Header(props) {
    const { children, ...extra } = props;

    // children is what's inside the <Header> tag
    // extra is a JSON object with { className: 'top-header', id: 'header', title: 'This is the header' }
    
    return (
        /*<header className={props.className} id={props.id}>
                {props.children}
        </header>*/

        <header {...extra}>
            {children}
        </header>
    );
}

// function Header(props) {
//     return (
//         <>
//           <img src={logo} className="App-logo-left" alt="logo" />
//           <img src={logo} className="App-logo-right" alt="logo" />
//           <h1 className='App-header'>Shebab Omran's Website</h1>
//         </>
//     );
// }

export default Header;