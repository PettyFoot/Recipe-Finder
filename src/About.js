
import React, {useEffect, useState} from 'react';
import Navigation from './Nav';
import './App.css';


function About(){
  return(
    <div className='about-section'>
      <Navigation />
      <h2>About Page</h2>
      <p>I'm learning to use React. I'm having a great time so far.</p>
    </div>
  )
   
}


export default About;
