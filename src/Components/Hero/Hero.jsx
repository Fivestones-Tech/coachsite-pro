import React from 'react'
import './Hero.css'

import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <h1>
        Transform Your Online Presence with{" "}
        <span className="span"> CoachSite Pro</span>
      </h1>
      <p>
        CoachSite Pro: Your Partner in Creating a Website that Truly Represents
        Your Coaching Brand
      </p>
      <div className="hero-action">
        <div className="hero-connect">Quick Message</div>
        <div className="hero-resume">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Get Started Today
          </AnchorLink>
        </div>
      </div>
    </div>
  );
}

export default Hero
