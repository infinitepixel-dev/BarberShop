import React from 'react'
import Navigation from './Navigation';
import bgVideo from '../src/assets/bgVideo.mp4';
import Poster from './Poster';
import 'animate.css/animate.min.css';
import { useEffect } from 'react';

function Homepage() {
    useEffect(() => {
        const siteLogo = document.querySelector('.siteLogo');
        if (siteLogo) {
          siteLogo.classList.add('animate__fadeInDown');
        }
      }, []);  
 
  return (
  <>
    <Navigation />
    <div className='container-fluid'>
      <div className='Row'>
        <div className='Col'>
          <div className='video-container'>
            <video autoPlay loop muted src={bgVideo} type='video/mp4'>
              Your browser does not support the video tag.
            </video>
            <div className="Col text-center">
              <img
                src='./public/logo.png'
                alt='Barber Shop Hair Salon Studio'
                className='siteLogo animate__animated'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Poster />
  </>
  )
}

export default Homepage