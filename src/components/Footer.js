import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logoImage from '../assets/Newsora_Logo_Transparent.png';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="footer-section">
            <div className="footer-logo">
              <img src={logoImage} alt="Newsora" className="footer-logo-img" />
              <span className="footer-logo-text">Newsora</span>
            </div>
            <p className="footer-description">
              Discover, follow, and chat about news that matters. 
              Experience the future of news consumption with AI-powered insights.
            </p>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul className="footer-links">
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Download</h4>
            <div className="footer-download">
              <a 
                href="https://apps.apple.com/app/newsora" 
                target="_blank" 
                rel="noopener noreferrer"
                className="download-badge"
              >
                <img 
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                  alt="Download on the App Store" 
                />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>&copy; {currentYear} Newsora. All rights reserved.</p>
          <p>Built with ❤️ for the future of news</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
