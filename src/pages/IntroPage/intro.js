import React from 'react';
import Nav from '../Nav/Nav';
import './../../App.css';
import logo from './intro_logo.gif';
import { Link } from 'react-router-dom';



function intro() {

  const navss = {
    color: 'white',
    textDecoration: 'none',
    fontSize: 'large',
    paddingTop: '10px'
};


  return (
    
    <div>
      
      <Nav/>
      <div className="gradient">

        <div className="logo">
          <img src={logo} alt="steamstats_logo"/> 
        </div>
        
        <div className="welcome">
          <h1>SteamStastic</h1>
          <h2>Where stats comes to life</h2>
          <Link style={navss} to='/'>
                <h3>Press here to continue to stats</h3>
            </Link>
        </div>

      </div>
      
    </div>
  );
}

export default intro;
