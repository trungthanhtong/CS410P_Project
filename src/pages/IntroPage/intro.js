import React from 'react';
import Nav from '../Nav/Nav';
import './../../App.css';
import logo from './intro_logo.gif';

function intro() {


  return (
    
    <div>
      
      <Nav/>
      <div className="gradient">
      <img src={logo} alt="steamstats_logo"/>
      </div>
    </div>
  );
}

export default intro;
