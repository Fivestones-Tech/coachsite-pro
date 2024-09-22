import React from 'react'
import './About.css'

import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from "../../assets/coach03.avif";

const About = () => {
  return (
    <div id='about' className="about">
      <div className="about-title">
        <h1>About <span className='span'>CoachSite Pro</span></h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <h2>Empowering Coaches with Authentic Online Presence</h2>
            <p>
              At CoachSite Pro, we believe that your website should reflect your
              unique expertise, values, and coaching style. Learn more about our
              mission, values, and team.
            </p>
            <button className="hero-connect about-btn">Discover Our Story</button>
        </div>
      </div>
    </div>
  );
}

export default About
