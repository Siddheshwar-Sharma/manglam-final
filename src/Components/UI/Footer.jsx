import "./Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import { FaLocationDot, FaEnvelope, FaPhone } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-about">
          <img
            src="/images/manglam.png"
            alt="Manglam Logo"
            className="footer-logo"
          />

          <p>
            Manglam Group is a diversified business conglomerate delivering
            excellence through Real Estate, Hospitality, Medical and
            Entertainment ventures.
          </p>

          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="#">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Businesses */}
        <div className="footer-links">
          <h3>Businesses</h3>

          <ul>
            <li>Real Estate</li>
            <li>Hospitality</li>
            <li>Medical</li>
            <li>Entertainment</li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-links">
          <h3>Company</h3>

          <ul>
            <li>About Us</li>
            <li>Leadership</li>
            <li>Legacy</li>
            <li>Media</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Contact Us</h3>

          <div className="contact-item">
            <FaLocationDot />
            <span>Jaipur, Rajasthan, India</span>
          </div>

          <div className="contact-item">
            <FaEnvelope />
            <span>info@manglamgroup.com</span>
          </div>

          <div className="contact-item">
            <FaPhone />
            <span className="phone-number">+91 9876543210</span>
          </div>

          <div className="subscribe-box">
            <input type="email" placeholder="Enter your email" />

            <button>Subscribe</button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom-wrapper">
        <div className="footer-bottom">
          <p>© 2026 Manglam Group. All Rights Reserved.</p>

          <div className="footer-policy">
            <span>Privacy Policy</span>
            <span>Terms &amp; Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};