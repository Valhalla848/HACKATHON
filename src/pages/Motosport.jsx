import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import img1 from "../image/imagesForMotosport/motorsport_cover.webp";
import img2 from "../image/imagesForMotosport/g1_spa_cover.jpg";
import img3 from "../image/imagesForMotosport/g2_spa_cover.webp";
import img4 from "../image/imagesForMotosport/Lamba.png";
import car1 from "../image/imagesForMotosport/2.jpg";
import car2 from "../image/imagesForMotosport/3.jpg";
import car3 from "../image/imagesForMotosport/photoeditorsdk-export (3).png";
import car4 from "../image/imagesForMotosport/5.webp";
import car5 from "../image/imagesForMotosport/7_b.jpg";
import car6 from "../image/imagesForMotosport/6_b_new.webp";
import car7 from "../image/imagesForMotosport/motorsport_reverse_overview_02.webp";
import groupLogo1 from "../image/imagesForMotosport/roger dubuis.webp";
import groupLogo2 from "../image/imagesForMotosport/pirelli_2022.webp";
import groupLogo3 from "../image/imagesForMotosport/BMC_air_filter3.webp";
import groupLogo4 from "../image/imagesForMotosport/capristo_0.webp";
import groupLogo5 from "../image/imagesForMotosport/HP_composites4.webp";
import groupLogo6 from "../image/imagesForMotosport/OMP.webp";
import "../styles/Motosport.css";
const Motosport = () => {
  return (
    <div className="Sport">
      <div className="MainSport1">
        <div className="Sport1">
          <div className="Sport1-text">
            <div className="Sport1-text-div1">LAMBORGHINI</div>
            <div className="Sport1-text-div2">SQUADRA CORSE</div>
            <button className="Sport1-text-btn">
              <ArrowForwardIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="MainSport2">
        <div className="Sport2">
          <div className="Sport2-text">MOTORSPORT NEWS</div>
          <div className="Sport2-news">
            <div className="Sport2-news1">
              <img src={img1} alt="" className="Sport2-news1-img" />
              <div className="Sport2-news1-div1">10 AUGUST 2022</div>
              <div className="Sport2-news1-div2">
                FROM VIRTUAL SIMULATION TO THE TRACK: THE REAL RACE BECOMES REAL
              </div>
              <button className="Sport2-news1-btn">READ MORE</button>
            </div>
            <div className="Sport2-news1">
              <img src={img2} alt="" className="Sport2-news1-img" />
              <div className="Sport2-news1-div1">30 JULY 2022</div>
              <div className="Sport2-news1-div2 Sport2-news1-div3">
                LAMBORGHINI SUPER TROFEO EUROPE: LOCAL STAR BONDUEL TAKES FIRST
                VICTORY AT SPA
              </div>
              <button className="Sport2-news1-btn">READ MORE</button>
            </div>
            <div className="Sport2-news1">
              <img src={img3} alt="" className="Sport2-news1-img" />
              <div className="Sport2-news1-div1">29 JULY 2022</div>
              <div className="Sport2-news1-div2 Sport2-news1-div3">
                LAMBORGHINI SUPER TROFEO EUROPE: TEEKENS AND MORETTI TAKE MAIDEN
                VICTORY IN RACE 1 AT SPA
              </div>
              <button className="Sport2-news1-btn">READ MORE</button>
            </div>
          </div>
        </div>
      </div>
      <div className="Sport3">
        <img src={img4} alt="" className="Sport3-img" />
        <div className="Sport3-text">
          <div className="Sport3-text-div1">SQUADRA CORSE</div>
          <div className="Sport3-text-div2">
            Squadra Corse is the name of Automobili Lamborghini’s motorsport
            department. It was created to offer unparalleled support to
            Automobili Lamborghini’s customers in the field. The cars that
            compete in the most prestigious GT championships all over the world
            are designed and produced in-house by Squadra Corse. It also
            organizes the Lamborghini Super Trofeo: the fastest one-make
            championship in the world
          </div>
        </div>
      </div>
      <div className="MainSport4">
        <div className="Sport4">
          <div className="Sport4-text">
            <div className="Sport4-text-div1">CUSTOMIZATION</div>
            <div className="Sport4-text-div2">
              Passion, performance and innovation. The Lamborghini Super Trofeo
              has been the pinnacle of the global one-make championship scene
              since 2009. The Super Trofeo is exclusively for Huracán Super
              Trofeo Evo model vehicles, which are racing versions of the
              road-approved supercars. There are three different series, in
              three continents: America, Asia and Europe. Every series consists
              of six rounds, each of which feature free practice sessions,
              qualifying and two races lasting 50 minutes each. There are four
              categories of drivers: Pro, Pro-Am, Am and Lamborghini Cup. The
              season culminates in the World Final, when the Lamborghini world
              champions are crowned.
            </div>
            <div className="Sport4-text-div4">SUPER TROFEO</div>
          </div>
          <img src={car1} alt="" className="Sport4-img" />
        </div>
      </div>
      <div className="Sport5">
        <img src={car3} alt="" className="Sport5-img Sport5-img1" />
        <img src={car2} alt="" className="Sport5-img Sport5-img2" />
      </div>
      <div className="MainSport6">
        <div className="Sport6">
          <img src={car4} alt="" className="Sport6-img" />
          <div className="Sport6-info">
            <div className="Sport6-info-div1">GT CUSTOMER RACING</div>
            <div className="Sport6-info-div2">
              In contrast with the Super Trofeo, GT3 championships are open to a
              range of constructors. There are more than 20 Automobili
              Lamborghini customer teams who have chosen to compete in Huracán
              GT3 EVO race cars. Since the Huracán GT3 launch in 2015, the cars
              have claimed more than 40 titles on a global scale. What better
              calling card could there be for Automobili Lamborghini on the GT
              racing scene?
            </div>
            <div className="Sport6-info-div3">GT3 CHAMPIONSHIP</div>
          </div>
        </div>
      </div>
      <div className="Sport7">
        <div className="Sport7-info">
          <div className="Sport7-info-div1">MOTORSPORT MODELS</div>
          <div className="Sport7-info-div2">
            Whether you prefer to lease or purchase your dream car we understand
            your needs, and will make sure to give you the upmost support and
            guide you in your new or pre-owned selection. Lamborghini Financial
            Services offers flexible leasing and financing solutions to complete
            your visionary experience and Lamborghini ownership.
          </div>
          <div className="Sport7-info-div3">RACE CARS</div>
          <div className="Sport7-info-div3">ONE-OFFS</div>
        </div>
        <img src={car5} alt="" className="Sport7-img1" />
        <img src={car6} alt="" className="Sport7-img2" />
      </div>
      <div className="Sport8">
        <div className="Sport8-text">
          <div className="Sport8-text-div1">EXPERIENCE</div>
          <div className="Sport8-text-div2">
            Become a Lamborghini Super Trofeo driver thanks to the official
            Lamborghini Pilota driving course, or enjoy the exclusive experience
            of a Super Trofeo race weekend in the glamorous atmosphere of
            Lamborghini Hospitality.
          </div>
          <div className="Sport8-text-div3">LAMBORGHINI EXPERIENCE</div>
        </div>
        <img src={car7} alt="" className="Sport8-img" />
      </div>
      <div className="partners">
        <h2 style={{ fontWeight: "bold" }} className="partners-text">
          PARTNERS
        </h2>
        <div className="partners-box">
          <div className="box-top">
            <img className="imgTop" src={groupLogo1} alt="" />
            <img className="imgTop" src={groupLogo2} alt="" />
          </div>
          <div className="box-bottom">
            <img className="imgBottom" src={groupLogo3} alt="" />
            <img className="imgBottom" src={groupLogo4} alt="" />
            <img className="imgBottom" src={groupLogo5} alt="" />
            <img className="imgBottom" src={groupLogo6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Motosport;
