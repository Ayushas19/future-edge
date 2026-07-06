import { Globe } from 'lucide-react';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-col">
            <Link to="/" className="footer-logo">
              Future Edge
            </Link>
            <p className="footer-desc">
              Copyright © {new Date().getFullYear()} Future Edge Digital Marketing. All rights Reserved.
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Useful Links</h4>
            <div className="footer-links">
              <Link to="/courses">Courses</Link>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-and-conditions">Terms & Conditions</Link>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Follow Us</h4>
            <div className="social-links">
              <a href="#" className="social-icon" aria-label="Facebook"><FaFacebook size={20} /></a>
              <a href="#" className="social-icon" aria-label="Instagram"><FaInstagram size={20} /></a>
              <a href="#" className="social-icon" aria-label="Youtube"><FaYoutube size={20} /></a>
              <a href="#" className="social-icon" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
              <a href="#" className="social-icon" aria-label="Website"><Globe size={20} /></a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
