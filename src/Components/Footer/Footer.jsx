import React from 'react'
import './Footer.css'
import logo from "../../assets/CoachSite Pro (1).svg";
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="" />
          <p>
            CoachSite Pro: Your Partner in Creating a Website that Truly
            Represents Your Coaching Brand
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          @ 2024 Alex Bennet. All right reserved
        </div>
        <p>Terms of services</p>
        <p>Privacy policy</p>
        <p>Connect</p>
      </div>
    </div>
  );
}

export default Footer
