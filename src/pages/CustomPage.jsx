import React from 'react';
import '../styles/Custom.css'
import {faArrowDown, faUserDoctor} from "@fortawesome/free-solid-svg-icons";
import headerImg from '../image/imagesForCustom/ynl_header.jpg'
import car1 from '../image/imagesForCustom/ynl_s1_01.webp'
import car2 from '../image/imagesForCustom/ynl_s1_02.webp'
import car3 from '../image/imagesForCustom/ynl_s1_03.webp'
import car4 from '../image/imagesForCustom/ynl_s1_04_0 (1).webp'
import car5 from '../image/imagesForCustom/ynl_s2_02.webp'
import car6 from '../image/imagesForCustom/ynl_s2_03.jpg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import '../styles/Footer.css'
import {
    faDiscord,
    faFacebook,
    faInstagram,
    faLinkedin,
    faTiktok,
    faTwitter,
    faYoutube
} from "@fortawesome/free-brands-svg-icons";
const CustomPage = () => {
    return (
        <div>
            <header style={{background:`url(${headerImg})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover',backgroundAttachment:'fixed'}} className="header">

                    <div className="header-text">
                    <h5 className='opacity4'>HOME / CUSTOM SOLUTION</h5>
                    <h2 className='title'>LAMBORGHINI</h2>
                    <h1 className='hugeText'>CUSTOM <br/> SOLUTION</h1>
                    </div>
                    <button className='btnDown'> <FontAwesomeIcon style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}} icon={faArrowDown}/></button>

            </header>
            <main>
                <section style={{marginTop:'40px'}} className='hero'>
<div style={{marginLeft:'100px',marginTop:'50px'}} className="sec-main">
                    <h2 style={{fontWeight:'bold'}}>CUSTOMIZATION</h2>
                    <p style={{marginTop:'40px',letterSpacing:'.5px',lineHeight:'23px'}}>The Ad Personam customisation program is available for the Huracán and <br/> Aventador, giving customers the chance to create their own personal Lamborghini, <br/>    making it extra special and meeting any wish.</p>
                    <p style={{marginTop:'40px',letterSpacing:'.5px',lineHeight:'23px'}}>Customers wishing to take advantage of the customisation program can design <br/> their own vehicle directly with Ad Personam Studio, the area dedicated to <br/> customisation based at the Sant’Agata Bolognese HQ.</p>
</div>
                    <img  className='car1' src={car1} alt=""/>
                    <img className='car2' src={car2} alt=""/>
                    <img src={car3} className='car3' alt=""/>
                    <img className='car4' src={car4} alt=""/>
                    <div className="sec-text-after-imgs">
                        <h2 style={{fontWeight:'bold'}}>ACCESSORIES</h2>
                        <p style={{marginTop:'40px',letterSpacing:'.5px',lineHeight:'23px'}}>Accessori Originali Automobili Lamborghini allows you to express your personality <br/> to the fullest and make your Lamborghini even more unique.The goal remains the <br/> same: to exceed our customers’ expectations of quality and service. Each and <br/> every accessory features outstanding quality, breakthrough technology,<br/> Lamborghini signature design, and the utmost attention to the smallest details.</p>
                    </div>
                </section>



<section className='sec2'>
    <div className="sec-2-text">
    <h2 style={{fontWeight:'bold'}}>FINANCIAL SERVICES</h2>
    <p style={{marginTop:'40px',letterSpacing:'.5px',lineHeight:'23px'}}>Whether you prefer to lease or purchase your dream car we <br/> understand your needs, and will make sure to give you the upmost <br/> support and guide you in your new or pre-owned selection. <br/> Lamborghini Financial Services offers flexible leasing and financing <br/> solutions to complete your visionary experience and Lamborghini ownership.</p>
    </div>


    <img src={car5} alt="" className='car5'/>
    <img src={car6} className='car6' alt=""/>
</section>
            </main>


            <div className='footer'>
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
            </div>
        </div>
    );
};

export default CustomPage;