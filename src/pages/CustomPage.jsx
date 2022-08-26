import React from "react";
import "../styles/Custom.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import car1 from "../image/imagesForCustom/ynl_s1_01.webp";
import car2 from "../image/imagesForCustom/ynl_s1_02.webp";
import car3 from "../image/imagesForCustom/ynl_s1_03.webp";
import car4 from "../image/imagesForCustom/ynl_s1_04_0 (1).webp";
import car5 from "../image/imagesForCustom/ynl_s2_02.webp";
import car6 from "../image/imagesForCustom/ynl_s2_03.jpg";
const CustomPage = () => {
  return (
    <div className="Custom">
      <div className="Custom1">
        <div className="OverLay1">
          <div className="Custom1-text">
            <div className="Custom1-text-div1">LAMBORGHINI</div>
            <div className="Custom1-text-div2">CUSTOM</div>
            <div className="Custom1-text-div2">SOLUTION</div>
            <br />
            <button className="Custom1-text-btn">
              <ArrowForwardIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="MainCustom2">
        <div className="Custom2">
          <div className="Custom2-text">
            <div className="Custom2-text-div1">CUSTOMIZATION</div>
            <div className="Custom2-text-div2">
              The Ad Personam customisation program is available for the Huracán
              and Aventador, giving customers the chance to create their own
              personal Lamborghini, making it extra special and meeting any
              wish.
            </div>
            <div className="Custom2-text-div3">
              Customers wishing to take advantage of the customisation program
              can design their own vehicle directly with Ad Personam Studio, the
              area dedicated to customisation based at the Sant’Agata Bolognese
              HQ.
            </div>
            <div className="Custom2-text-div4">DISCOVER MORE</div>
          </div>
          <img src={car1} alt="" className="Custom2-img" />
        </div>
      </div>
      <div className="Custom3">
        <img src={car3} alt="" className="Custom3-img Custom3-img1" />
        <img src={car2} alt="" className="Custom3-img Custom3-img2" />
      </div>
      <div className="MainCustom4">
        <div className="Custom4">
          <img src={car4} alt="" className="Custom4-img" />
          <div className="Custom4-info">
            <div className="Custom4-info-div1">ACCESSORIES</div>
            <div className="Custom4-info-div2">
              Accessori Originali Automobili Lamborghini allows you to express
              your personality to the fullest and make your Lamborghini even
              more unique.The goal remains the same: to exceed our customers’
              expectations of quality and service. Each and every accessory
              features outstanding quality, breakthrough technology, Lamborghini
              signature design, and the utmost attention to the smallest
              details.
            </div>
            <div className="Custom4-info-div3">DISCOVER MORE</div>
          </div>
        </div>
      </div>
      <div className="Custom5">
        <div className="Custom5-info">
          <div className="Custom5-info-div1">FINANCIAL SERVICES</div>
          <div className="Custom5-info-div2">
            Whether you prefer to lease or purchase your dream car we understand
            your needs, and will make sure to give you the upmost support and
            guide you in your new or pre-owned selection. Lamborghini Financial
            Services offers flexible leasing and financing solutions to complete
            your visionary experience and Lamborghini ownership.
          </div>
          <div className="Custom5-info-div3">DISCOVER MORE</div>
        </div>
        <img src={car5} alt="" className="Custom5-img1" />
        <img src={car6} alt="" className="Custom5-img2" />
      </div>
    </div>
  );
};

export default CustomPage;
