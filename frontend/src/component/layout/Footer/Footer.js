import React from 'react'
import playStore from "../../../images/playstore.png"
import appStore from "../../../images/Appstore.png"
import './Footer.css'
const Footer = () => {
  return (
   <footer id='footer'>
     <div className="leftFooter">
     <h4>DOWNLOAD OUR APP</h4>
     <p>Download App for Android and IOS mobile Phone</p>
     <img src={playStore} alt="playStore"/>
     <img src={appStore} alt="appStore"/>
     </div>
     <div className="midFooter">
   <h1>ECOMMERCE</h1>
   <p>High Quality is Our First Priority</p>
   <p>Copyright 2023 &copy; Abhi2359</p>
     </div>
     <div className="rightFooter">
<h4>Follow Us</h4>
<a href="https://www.linkedin.com/in/abhishek-kumar-a9460a1b1/">LinkedIn</a>
<a href="https://twitter.com/Abhishe85689993">Twitter</a>
<a href="https://github.com/Abhi2359">Git Hub</a>
     </div>
   </footer>
  );
 
}

export default Footer