import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Activities</h3>
            <p>Learning through hands-on projects</p>
          </div>
          
          <div className="footer-links">
            <a href="/activity1" className="footer-link">Activity 1</a>
            <a href="/activity2" className="footer-link">Activity 2</a>
            <a href="/activity3" className="footer-link">Activity 3</a>
          </div>
          
          <div className="footer-social">
            <a href="#" className="social-link">⭐ GitHub</a>
            <a href="#" className="social-link">🐦 Twitter</a>
            <a href="#" className="social-link">📘 LinkedIn</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 React Activities .</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;