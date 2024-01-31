import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import React from 'react';
import './App.css';

const Header = () => {
  return (
    <header className="navbar navbar-dark justify-content-between">
      <span className="navbar-brand"></span>
      <div className="d-flex mt-3 nav-items">
        <NavItem text="Gmail" />
        <NavItem text="Images" />
        <NavItem text="Google Apps" />
        <ProfileIcon />
      </div>
    </header>
  );
};

const NavItem = ({ text }) => {
  return <span className="nav-item nav-link mx-2  text-white">{text}</span>;
};

const ProfileIcon = () => {
  return (
    <div className="nav-item">
      <div className="profile-icon bg-secondary rounded-circle d-flex align-items-center justify-content-center">
        Profile
      </div>
    </div>
  );
};

export default Header;
