import React from 'react';
import headerImg from '../image/imagesForMotosport/slide_motorsport_01.jpg'
import imgNews1 from '../image/imagesForMotosport/motorsport_cover.webp'
import imgNews2 from '../image/imagesForMotosport/g2_spa_cover.webp'
import imgNews3 from '../image/imagesForMotosport/g1_spa_cover.jpg'
import sec2Img from '../image/imagesForMotosport/Lamba.png'
import imgLogo1 from '../image/imagesForMotosport/LB_SC_SuperTROFEO_2017.webp'
import group1Img1 from '../image/imagesForMotosport/photoeditorsdk-export (2).png'
import group1Img2 from '../image/imagesForMotosport/3.jpg'
import group1Img3 from '../image/imagesForMotosport/photoeditorsdk-export (3).png'
import group1Img4 from '../image/imagesForMotosport/5.webp'
import group2Img1 from '../image/imagesForMotosport/7_b.jpg'
import group2Img2 from '../image/imagesForMotosport/6_b_new.webp'
import LastSecImg from '../image/imagesForMotosport/motorsport_reverse_overview_02.webp'
import groupLogo1 from '../image/imagesForMotosport/roger dubuis.webp'
import groupLogo2 from '../image/imagesForMotosport/pirelli_2022.webp'
import groupLogo3 from '../image/imagesForMotosport/BMC_air_filter3.webp'
import groupLogo4 from '../image/imagesForMotosport/capristo_0.webp'
import groupLogo5 from '../image/imagesForMotosport/HP_composites4.webp'
import groupLogo6 from '../image/imagesForMotosport/OMP.webp'
import '../styles/Motosport.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faDiscord,
    faFacebook,
    faInstagram,
    faLinkedin,
    faTiktok,
    faTwitter,
    faYoutube
} from "@fortawesome/free-brands-svg-icons";
import '../styles/Footer.css'
import {faUserDoctor} from "@fortawesome/free-solid-svg-icons";
const Motosport = () => {
    return (
        <div>
<header style={{backgroundImage:`url(${headerImg})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center',backgroundAttachment:'fixed'}}>
   <div className="header-text">
    <h3>HOME / MOTORSPORT</h3>
    <h2>LAMBORGHINI</h2>
    <h1>SQUADRA <br/> COURSE</h1>
   </div>
</header>
            <main style={{marginBottom:'4500px'}}>
                <section className='hero'>
<div className="container">
                    <h2 className='news'>MOTORSPORT NEWS</h2>
                    <div className="hero-news">
                        <div style={{width:'50vw'}} className="hero-news-block">
                            <img src={imgNews1} alt=""/>
                            <h4 style={{color:'rgba(0,0,0,.6)'}}>10 AUGUST 2022</h4>
                            <h3 style={{fontWeight:'bold'}}> FROM VIRTUAL SIMULATION TO THE TRACK: THE REAL RACE BECOMES REAL</h3>
                            <button style={{border:'.8px solid rgba(0,0,0,.5)'}}>READ MORE</button>
                        </div>

                        <div style={{width:'51vw'}} className="hero-news-block">
                            <img src={imgNews2} alt=""/>
                            <h4 style={{color:'rgba(0,0,0,.6)'}}>30 JULY 2022</h4>
                            <h3 style={{fontWeight:'bold'}}>
                                LAMBORGHINI SUPER TROFEO EUROPE: LOCAL STAR BONDUEL TAKES FIRST VICTORY AT SPA</h3>
                            <button style={{border:'.8px solid rgba(0,0,0,.5)'}}>READ MORE</button>
                        </div>

                        <div style={{width:'52.5vw'}} className="hero-news-block">
                            <img src={imgNews3} alt=""/>
                            <h4 style={{color:'rgba(0,0,0,.6)'}}>29 JULY 2022</h4>
                            <h3 style={{fontWeight:'bold'}}>
                                LAMBORGHINI SUPER TROFEO EUROPE: LOCAL STAR BONDUEL TAKES FIRST VICTORY AT SPA</h3>
                            <button style={{border:'.8px solid rgba(0,0,0,.5)'}}>READ MORE</button>
                        </div>
                    </div>
</div>



                </section>
<div className="box">
                <div className="sec2-right">
                    <h2>SQUADRA CORSE</h2>
                    <p style={{lineHeight:'25px', color:'rgba(0,0,0,.6)'}}>Squadra Corse is the name of Automobili Lamborghini’s motorsport department. It was created to offer unparalleled support to Automobili Lamborghini’s customers in the field. The cars that compete in the most prestigious GT championships all over the world are designed and produced in-house by Squadra Corse. It also organizes the Lamborghini Super Trofeo: the fastest one-make championship in the world.</p>
                </div>
                <img src={sec2Img}  className='sec2-left' alt=""/>
</div>

                <section className='sec3'>
                    <div className="sec3-text">
                        <img className='logo1' src={imgLogo1} alt=""/>
                        <p style={{color:'rgba(0,0,0,.6)',lineHeight:'25px'}}>Passion, performance and innovation. The Lamborghini Super Trofeo has <br/> been the pinnacle of the global one-make championship scene since 2009. <br/> The Super Trofeo is exclusively for Huracán Super Trofeo Evo model <br/> vehicles, which are racing versions of the road-approved supercars. There <br/> are three different series, in three continents: America, Asia and Europe. <br/> Every series consists of six rounds, each of which feature free practice <br/> sessions, qualifying and two races lasting 50 minutes each. There are four <br/> categories of drivers: Pro, Pro-Am, Am and Lamborghini Cup. The season <br/> culminates in the World Final, when the Lamborghini world champions are crowned.</p>
                        <h3 className='linkH3'>SUPER TROFEO</h3>
                        <img src={group1Img1} className='groupImg1' alt=""/>
                        <img src={group1Img2} className='groupImg2' alt=""/>
                        <img src={group1Img3} className='groupImg3' alt=""/>
                        <img src={group1Img4} className='groupImg4' alt=""/>
                        <div className="textAfterImages">
                            <h2 style={{fontWeight:'bold'}}>GT CUSTOMER RACING</h2>
                            <p style={{color:'rgba(0,0,0,.6)',lineHeight:'25px'}}>In contrast with the Super Trofeo, GT3 championships are open to a range <br/> of constructors. There are more than 20 Automobili Lamborghini customer <br/> teams who have chosen to compete in Huracán GT3 EVO race cars. Since <br/> the Huracán GT3 launch in 2015, the cars have claimed more than 40 titles <br/> on a global scale. What better calling card could there be for Automobili <br/> Lamborghini on the GT racing scene?</p>
                            <h3 className='linkH3'>GT3 CHAMPIONSHIP</h3>
                        </div>
                    </div>
                </section>
                <section className='sec4'>
                    <div className="sec4-text">
                        <h2 style={{fontWeight:'bold'}}>MOTORSPORT MODELS</h2>
                        <p style={{color:'rgba(0,0,0,.6)',lineHeight:'25px'}}>Lamborghini Squadra Corse’s cars for motorsport customers <br/> are designed and produced in-house. The construction <br/> approach used in Automobili Lamborghini supercars is also <br/> applied to race models. Concepts such as superior technology <br/> and attention to detail are taken to peerless heights for <br/> customers who compete on race tracks all over the world.</p>
                        <h3 className='linkH3'>RACE CARS</h3>
                        <h3 className='linkH3'>ONE_OFFS</h3>
                    </div>
                    <img src={group2Img1} className='group2Img1' alt=""/>
                    <img src={group2Img2} className='group2Img2' alt=""/>
                    <div className="sec4-text-2">
                        <h2>EXPERIENCE</h2>
                        <p style={{color:'rgba(0,0,0,.6)',lineHeight:'25px'}}>Become a Lamborghini Super Trofeo driver thanks to <br/> the official Lamborghini Pilota driving course, or <br/> enjoy the exclusive experience of a Super Trofeo race <br/> weekend in the glamorous atmosphere of <br/> Lamborghini Hospitality.</p>
                        <h3 className='linkH3'>LAMBORGHINI EXPERIENCE</h3>
                    </div>
                    <img src={LastSecImg} className='LastSecImg' alt=""/>
                </section>
                <section className='partners'>
                    <h2 style={{fontWeight:'bold'}} className='partners-text'>PARTNERS</h2>
                    <div className="partners-box">
                        <div className="box-top">
                            <img className='imgTop' src={groupLogo1} alt=""/>
                            <img className='imgTop' src={groupLogo2} alt=""/>
                        </div>
                        <div className="box-bottom">
                            <img className='imgBottom' src={groupLogo3} alt=""/>
                            <img className='imgBottom' src={groupLogo4} alt=""/>
                            <img className='imgBottom' src={groupLogo5} alt=""/>
                            <img className='imgBottom' src={groupLogo6} alt=""/>
                        </div>
                    </div>
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

export default Motosport;