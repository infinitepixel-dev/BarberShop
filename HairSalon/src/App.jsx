import { useState } from 'react'
import bgVideo from './assets/bgVideo.mp4'
import Navigation from '../components/Navigation'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../src/reset.css'
import { Row, Col } from 'react-bootstrap'

function App() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col'>
          <div className='video-container'>
            <video autoPlay loop muted src={bgVideo} type='video/mp4'>
              Your browser does not support the video tag.
            </video>
            <div className="col text-center">
              {/* <h1 className='businessName'>BarberShop</h1>
              <h4 className='businessName2'>HairCut Studio</h4> */}
              <img
            src='./public/logo.png'
            alt='Barber Shop Hair Salon Studio'
            className='siteLogo'
          />
            </div>
          </div>
        </div>
      </div>
      {/* <div className='row justify-content-center align-items-center'>
        <div className='col'>
          <img
            src='./public/logo.png'
            alt='Barber Shop Hair Salon Studio'
            className='siteLogo'
          />
        </div>
      </div> */}
      <div className="row">
        <div className="col">
          
        </div>
      </div>
    </div>
  )
}

export default App
