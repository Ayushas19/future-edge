import { Globe } from 'lucide-react';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer section">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-col">
            <Link to="/" className="footer-logo">
              <span className="text-gradient-brand" style={{ fontSize: '1.5rem', fontWeight: 700 }}>Future Edge</span>
            </Link>
            <p className="footer-desc">
              Copyright © {new Date().getFullYear()} Future Edge Digital Marketing. All rights Reserved.
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Useful Links</h4>
            <div className="footer-links">
              <Link to="/about">About Us</Link>
              <Link to="/digital-marketing-services-kanpur">Services</Link>
              <Link to="/digital-marketing-courses-kanpur">Courses</Link>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-and-conditions">Terms & Conditions</Link>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Follow Us</h4>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Facebook"><FaFacebook size={20} /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram"><FaInstagram size={20} /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Youtube"><FaYoutube size={20} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
              <a href="https://futureedge.in" target="_blank" rel="noreferrer" className="social-icon" aria-label="Website"><Globe size={20} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Contact Us</h4>
            <div className="footer-links">
              <a href="mailto:contact@futureedge.in">contact@futureedge.in</a>
              <a href="tel:+916393213527">+91 63932 13527</a>
              <p className="footer-desc mt-2">Kanpur, Uttar Pradesh, India</p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
