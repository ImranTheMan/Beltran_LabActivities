// src/Footer.js

import React from 'react';
import './App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p>Philippines</p>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <span className="footer-link">About</span>
          <span className="footer-link">Advertising</span>
          <span className="footer-link">Business</span>
          <span className="footer-link">How search works</span>
        </div>
        <div className="footer-bottom-right">
          <span className="footer-link">Privacy</span>
          <span className="footer-link">Terms</span>
          <span className="footer-link">Settings</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
