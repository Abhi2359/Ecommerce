import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import styles from './Header.css';
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';


const HamburgerMenu = ({ isOpen }) => {
  return (
    <Menu isOpen={isOpen} styles ={styles} >
     <a id="home" className="menu-item"  href="/">
    <FaHome className="icon" />
    Home
  </a>
  <a id="about" className="menu-item"   href="/about">
    <FaInfoCircle className="icon" />
    About
  </a>
  <a id="contact" className="menu-item"  href="/contact">
    <FaEnvelope className="icon" />
    Contact
  </a>
    </Menu>
  );
}

const Header= () => {
  const [menuOpen, setMenuOpen] = useState(false);

 
  function handleStateChange(state) {
    setMenuOpen(state.isOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <div>
     
      <HamburgerMenu isOpen={menuOpen} onStateChange={handleStateChange}/>
     
    </div>
  );
}

export default Header;
