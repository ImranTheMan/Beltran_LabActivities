import React from "react";

const Footer = ({ toggleSwitch, handleToggleSwitch }) => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p>Philippines</p>

        <div className="toggle-switch" style={{ float: "right" }}>
          <label className="switch">
            <input
              type="checkbox"
              checked={toggleSwitch}
              onChange={handleToggleSwitch}
            />
            <span className="slider"></span>
          </label>
        </div>
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
