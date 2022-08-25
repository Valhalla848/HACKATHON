import React from "react";
import '../styles/Footer.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoffee} from "@fortawesome/free-solid-svg-icons";
import {faInstitution} from "@fortawesome/free-solid-svg-icons";
import {faCaretSquareDown} from '@fortawesome/free-regular-svg-icons'
import {faInstagram,faFacebook,faYoutube,faTwitter,faTiktok,faLinkedin,faDiscord} from "@fortawesome/free-brands-svg-icons";
import {faUserDoctor} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return <div className='footer'>
    <div className="container">
<div className="footer-height">
  <div className="footer-height-left">
    <ul>
      <li>company</li>
      <li>career</li>
      <li>contact us</li>
      <li>sustainability</li>
      <li>media center</li>
      <li>privacy & legal</li>

      <li>cookie settings</li>
      <li>sitemap</li>
      <li>newsletter</li>
    </ul>
  </div>
  <div className="footer-height-right">
    <ul>

      <li ><FontAwesomeIcon style={{color:"white"}} icon={faInstagram} /> </li>
      <li ><FontAwesomeIcon style={{color:"white"}} icon={faFacebook} /> </li>
      <li ><FontAwesomeIcon style={{color:"white"}} icon={faYoutube} /> </li>
      <li ><FontAwesomeIcon style={{color:"white"}} icon={faTwitter} /> </li>
      <li ><FontAwesomeIcon style={{color:"white"}} icon={faTiktok} /> </li>
      <li ><FontAwesomeIcon style={{color:"white"}} icon={faLinkedin} /> </li>
      <li ><FontAwesomeIcon style={{color:"white"}} icon={faDiscord} /> </li>
      <li ><abbr title="говно"><FontAwesomeIcon style={{color:"white"}} icon={faUserDoctor} /></abbr> </li>

    </ul>
  </div>
</div>
      <p style={{color:'white',marginTop:'40px',fontSize:'14px'}}> <span style={{marginRight:'5px'}}>*</span>    The consumption and emissions values in the website refer to your geographical IP. This value might be unrealistic if you navigate using VPN or if the position of your Internet provider is imprecise. If you believe you are incorrectly geolocalized, contact your dealer to get valid consumption and emissions information in your area.</p>

<p style={{color:'white',marginTop:'30px',fontSize:'16px'}}>Copyright © 2022 Automobili Lamborghini S.p.A. a sole shareholder company part of Audi Group.</p>
      <p style={{color:'white',marginTop:'10px'}}>All rights reserved. VAT no. IT 00591801204</p>
    </div>
  </div>;
};

export default Footer;
