import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const links = ['about', 'projects', 'skills'];

  return (
    <div className='navbar-section'>
      {/* <h1 className='header'> {`{ Carlos Martinez }`}</h1> */}
      <h1 className='header'> {`< Carlos Martinez />`}</h1>
      <nav className='navbar'>
        <div className='navbar__nav-links'>
          <Link to='/' className='navbar__link'>home</Link>
          {
            links.map((link, key) => {
              return <Link to={`/${link}`} className='navbar__link' key={key}>{ link }</Link>;
            })
          }
          <a className='navbar__link' href='https://drive.google.com/file/d/1IzgVh3Frq7686cyZoXookgFQI6YU4HXl/view?usp=sharing' target='_blank' rel='noopener noreferrer'>resumé</a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
