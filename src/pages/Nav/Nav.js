import './../../App.css';
import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {

  const navss = {
      color: 'white',
      textDecoration: 'none'
  };


  return (
    <nav>
        <ul className="navs">
            <Link style={navss} to='/'>
                <li>SteamStats</li>
            </Link>
            <Link style={navss} to='/place1'> 
                <li>link to ....</li>
            </Link>
            <Link style={navss} to='/place2'>
                <li>another link to...</li>
            </Link>
            
        </ul>
    </nav>
  );
}

export default Nav;