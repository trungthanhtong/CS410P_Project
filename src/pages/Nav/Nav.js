import './../../App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import SizeContext from 'antd/lib/config-provider/SizeContext';


function Nav() {

  const navss = {
      color: 'white',
      textDecoration: 'none',
      fontSize: 'large',
      paddingTop: '10px'
  };


  return (
    <nav>
        <ul className="navs">
            <Link style={navss} to='/'>
                <li>Help</li>
            </Link>
            <Link style={navss} to='/place1'> 
                <li>About SteamStats</li>
            </Link>
            <Link style={navss} to='/place2'>
                <li>Contact Us</li>
            </Link>
            
        </ul>
    </nav>
  );
}

export default Nav;