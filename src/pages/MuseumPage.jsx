import React from "react";
import headerImg from "../image/imagesForMuseum/02_hero.webp";
import headerImg2 from "../image/imagesForMuseum/01_hero.jpg";
import headerImg3 from "../image/imagesForMuseum/00_hero_museo.webp";
import carImg1 from "../image/imagesForMuseum/01_s1.webp";
import carImg2 from "../image/imagesForMuseum/02_s2.webp";
import carImg3 from "../image/imagesForMuseum/03_s3.webp";
import carImg4 from "../image/imagesForMuseum/04_s4 (1).webp";
import carImg5 from "../image/imagesForMuseum/05_s1 (1) (1).webp";
import carImg6 from "../image/imagesForMuseum/06_s2.webp";
import carImg7 from "../image/imagesForMuseum/07_s3.webp";
import carImg8 from "../image/imagesForMuseum/08_s4 (1).webp";
import carImgMuseumGallery from "../image/imagesForMuseum/museum_gallery_07.webp";

import logoPartners from "../image/imagesForMuseum/logo-partner.webp";
import "../styles/Museum.css";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faFacebook,
  faInstagram,
  faLinkedin,
  faTiktok,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MuseumPage = () => {
  const arr = [headerImg, headerImg2, headerImg3];
  //54.352877, 46.993765
  const position = [54.352877, 46.993765];
  return (
    <div>
      <header
        style={{
          background: `url(${headerImg3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div style={{ color: "white" }} className="header-text">
          <p style={{ opacity: ".8" }}>HOME / MUSEUM</p>
          <h2 style={{ marginTop: "180px", fontSize: "1.5vw" }}>
            LAMBORGHINI MUSEUM
          </h2>
          <h1 style={{ fontSize: "4.9vw", marginTop: "10px" }}>MUDETEC</h1>
        </div>
      </header>
      <main style={{ marginBottom: "2800px" }}>
        <section className="hero">
          <div className="container">
            <div style={{ marginTop: "90px" }} className="hero-text">
              <h2 style={{ fontWeight: "bold" }}>
                MUDETEC: IN SEARCH OF THE FUTURE
              </h2>
              <p
                style={{
                  lineHeight: "20px",
                  marginTop: "30px",
                  letterSpacing: ".9px",
                  color: "rgba(0,0,0,.6)",
                  minWidth: "600px",
                }}
              >
                The Lamborghini Museum has been updated to become Museum of
                Technologies, where fascinating history, the iconic models and
                tours of the production lines tell the story of over 50 years of
                innovation that project Lamborghini into the future. Mudetec
                offers an interactive experience, also thanks to the new driving
                simulator that amplifies the thrills and the discovery of the
                vehicles on display. From the early visionary creations of the
                genius of Ferruccio Lamborghini like the Miura and Countach to
                the more recent and exclusive super sports cars like the hybrid
                concept Asterion, the few-off Centenario, the Huracán
                Performante and the Aventador SVJ. Experience the emotion of the
                new augmented reality. Download the #lamborghinimudetec app Open
                every day from 9:30 a.m. until 6:00 p.m. (last admittance at 5
                p.m.).
              </p>
            </div>
          </div>
          <img src={carImg1} className="carImg1" alt="" />
          <img src={carImg2} alt="" className="carImg2" />
          <img src={carImg3} className="carImg3" alt="" />
          <img src={carImg4} className="carImg4" alt="" />
          <div className="hero-text-afterImg">
            <p
              style={{
                lineHeight: "25px",
                marginTop: "30px",
                letterSpacing: ".9px",
                color: "rgba(0,0,0,.6)",
                fontSize: "1vw",
              }}
              className="par"
            >
              Please remember that to ensure your safety, booking your tour of
              Mudetec is mandatory. A protective face mask is not mandatory to
              gain admittance to the museum, but it is strongly recommended.
            </p>
            <h3 style={{ fontWeight: "400", marginTop: "30px" }}>
              DAYS CLOSED IN 2022
            </h3>
            <h3
              style={{
                color: "rgba(0,0,0,.6)",
                marginTop: "5px",
                fontWeight: "200",
                lineHeight: "25px",
              }}
            >
              January 1; May 1; August 15; December 25 <br />
              March 10 (closed until 1:30 p.m.) <br />
              July 20 (closed after 2:30 p.m.) <br />
              September 16, 23, 30 <br />
              December 24, 31 (early closing at 2 p.m.)
            </h3>
          </div>
        </section>
        <section className="sec2">
          <div className="sec2-text">
            <h2 style={{ fontWeight: "bold", fontSize: "2vw" }}>
              TOUR OF THE PRODUCTION LINES
            </h2>
            <p
              style={{
                color: "rgba(0,0,0,.6)",
                fontSize: "1.2vw",
                lineHeight: "26px",
                marginTop: "20px",
              }}
            >
              From the historic entrance to the future: touring the production
              lines is a unique <br /> journey to witness the birth of the
              Lamborghini sports cars. From the V12 line <br /> where the
              Aventador’s engine and frame come together for the first time and
              on to <br /> the V10 line where the Huracán is born. The guided
              tours that start from Mudetec <br /> make the tour an
              unforgettable experience in search of the company’s most amazing
              places.
            </p>
            <h4 style={{ marginTop: "20px", fontSize: "1.5vw" }}>
              Activity suspended indefinitely.
            </h4>
          </div>
          <img src={carImg5} className="carImg5" alt="" />
          <img src={carImg6} className="carImg6" alt="" />
          <img src={carImg7} className="carImg7" alt="" />
          <img src={carImg8} className="carImg8" alt="" />
          <div className="sec2-text-afterimg">
            <h2 style={{ fontWeight: "bold", fontSize: "2vw" }}>
              EVENTS AND INCENTIVE TOURS: AN <br /> EXCLUSIVE EXPERIENCE
            </h2>
            <p
              style={{
                color: "rgba(0,0,0,.6)",
                marginTop: "30px",
                lineHeight: "25px",
                fontSize: "1.2vw",
              }}
            >
              Our offer of incentive tours turns into an unforgettable
              experience for customers <br /> and collaborators owing to the
              dedicated guides, personalized gadgets <br /> and customized
              proposals. <br />
              After the museum closes, Mudetec’s rooms turn into a magical and
              exclusive <br /> place where private tours and exclusive events
              can be organized. <br />
              The new Olimpo looking onto Manifattura Lamborghini 4.0, the
              technological <br /> production line of Urus, is the ideal
              backdrop for transforming conferences and <br /> meetings into
              unique experiences. <br />
              For information:{" "}
              <strong style={{ color: "black" }}>
                museumevents@lamborghini.com
              </strong>
            </p>
            <h3
              style={{
                fontWeight: "400",
                marginTop: "20px",
                fontSize: "1.5vw",
              }}
            >
              Amuseumevents@lamborghini.com
            </h3>
          </div>
        </section>
        <section
          style={{
            backgroundImage: `url(${carImgMuseumGallery})`,
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="secImg"
        ></section>
        <section className="contactUs">
          <div className="container">
            <div className="contact-main">
              <div style={{ marginLeft: "5%" }} className="contact-left">
                <h1 style={{ fontWeight: "bold", fontSize: "2vw" }}>
                  CONTACTS
                </h1>
                <p
                  style={{
                    color: "rgba(0,0,0,.6)",
                    marginTop: "30px",
                    lineHeight: "30px",
                    fontSize: "1.2vw",
                  }}
                >
                  Via Modena, 12 40019 Sant’Agata Bolognese <br />
                  (Bologna) - Italy <br />
                  Phone: +39 051 681 7611
                </p>
              </div>
              <div className="contact-right" style={{ width: "60%" }}>
                <MapContainer
                  center={position}
                  zoom={15}
                  scrollWheelZoom={false}
                  style={{ margin: "0 auto", marginTop: "50px" }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />

                  <Marker position={[42.82881661578283, 74.58419582287019]}>
                    <Popup>
                      Michelle <br />
                      Лучшая кофейня <br />
                      <a href="https://2gis.kg/bishkek/firm/70000001047006378/74.584363%2C42.828519?m=74.583745%2C42.82865%2F15.8">
                        2-GIS
                      </a>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </div>
        </section>
        <section className="sec-info">
          <div className="container">
            <h2 style={{ fontWeight: "bold", fontSize: "2.3vw" }}>
              INFORMATION
            </h2>
            <div className="info-main">
              <div className="info-left">
                <h2>
                  <span style={{ fontWeight: "bold", fontSize: "3vw" }}>
                    EDUCATIONAL VISITS
                  </span>
                  <span
                    style={{
                      color: "rgba(0,0,0,.6)",
                      fontSize: "1vw",
                      marginTop: "10px",
                    }}
                  >
                    School and university groups must book in advance.
                  </span>
                </h2>

                <h2 style={{ marginTop: "25px" }}>
                  <span style={{ fontWeight: "bold", fontSize: "3vw" }}>
                    PICTURES AND VIDEO SHOOTING
                  </span>
                  <span
                    style={{
                      color: "rgba(0,0,0,.6)",
                      fontSize: "1vw",
                      marginTop: "10px",
                      lineHeight: "25px",
                    }}
                  >
                    Pictures and videos may be taken inside the Museum for
                    private use only. No <br /> photography or video recording
                    is allowed during the factory visit. Before the start of{" "}
                    <br /> the tour, participants will be asked to leave
                    cameras, cellphones, and all other <br /> equipment able to
                    take photos and/or video recordings in the lockers provided.
                  </span>
                </h2>
                <h2 style={{ marginTop: "25px" }}>
                  <span style={{ fontWeight: "bold", fontSize: "3vw" }}>
                    ARCHITECTURAL BARRIERS
                  </span>
                  <span
                    style={{
                      color: "rgba(0,0,0,.6)",
                      fontSize: "1vw",
                      marginTop: "10px",
                      lineHeight: "25px",
                    }}
                  >
                    The Museum has no architectural barriers. Visits take place
                    over two floors, and a lift <br /> is available for persons
                    with limited mobility..
                  </span>
                </h2>
              </div>
              <div className="info-right">
                <h2>
                  <span style={{ fontWeight: "bold", fontSize: "3vw" }}>
                    RESTRICTIONS
                  </span>
                  <span
                    style={{
                      color: "rgba(0,0,0,.6)",
                      fontSize: "1vw",
                      marginTop: "10px",
                      lineHeight: "25px",
                    }}
                  >
                    Visitors are not permitted to touch the vehicles and
                    materials on display, and it is not <br /> permitted to
                    enter the vehicles or remove anything from the Museum.
                    Eating is not <br /> allowed inside the Museum. Animals may
                    not enter, with the exception of guide dogs <br /> for the
                    blind. Visitors are asked to behave in a manner appropriate
                    for a museum, <br /> showing respect to the staff and other
                    visitors; this includes their choice of attire and <br />{" "}
                    tone of voice. Those accompanying children and minors are
                    responsible for their <br /> behavior at all times. The use
                    of cellular phones is permitted as long as care is taken{" "}
                    <br /> not to disturb or inconvenience others.
                  </span>
                </h2>
                <h2 style={{ marginTop: "25px" }}>
                  <span style={{ fontWeight: "bold", fontSize: "3vw" }}>
                    REDUCED RATES
                  </span>
                  <span
                    style={{
                      color: "rgba(0,0,0,.6)",
                      fontSize: "1vw",
                      marginTop: "10px",
                      lineHeight: "25px",
                    }}
                  >
                    Documents certifying the right to reduced admission fees
                    must be shown to staff on request.
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section
          className="sec-partners"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <h2 style={{ fontWeight: "bold", fontSize: "2vw" }}>PARTNERS</h2>
          <img style={{ marginLeft: "65px" }} src={logoPartners} alt="" />
        </section>
      </main>
    </div>
  );
};

export default MuseumPage;
