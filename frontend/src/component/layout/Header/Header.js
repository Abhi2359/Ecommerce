import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import styles from './Header.css';
import { FaHome, FaInfoCircle, FaEnvelope, FaSearch, FaCartPlus, FaUser } from 'react-icons/fa';
import logo from "../../../images/logo.png"


const HamburgerMenu = ({ isOpen }) => {
  return (
    <Menu isOpen={isOpen} styles ={styles} >
       <img src={logo} alt="logo" className='logo'/>

     <a id="home" className="menu-item"  href="/">
    <FaHome className="icon" />
    Home
  </a>
     <a id="search" className="menu-item"  href="/search">
    <FaSearch className="icon" />
    Search
  </a>
     <a id="cart" className="menu-item"  href="/cart">
    <FaCartPlus className="icon" />
    Cart
  </a>
     <a id="user" className="menu-item"  href="/user">
    <FaUser className="icon" />
    User
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
