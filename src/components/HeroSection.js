import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>

      <video src='/videos/video1.mp4' autoPlay loop muted />

      <h1 className="hero-heading">"To begin, begin."</h1>
      <p>-William Wordsworth</p>

      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Join Study Group <i class="far fa-grin-alt"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;