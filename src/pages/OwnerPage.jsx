import React, { useEffect } from "react";
import "../styles/OwnerPage.css";
import img1 from "../img/owner/gate_ownership_over_01_0.webp";
import img2 from "../img/owner/gate_ownership_s1_02.webp";
import img3 from "../img/owner/gate_ownership_s1_03.jpeg";
import img4 from "../img/owner/gate_ownership_s3_02.jpeg";
import img5 from "../img/owner/gate_ownership_s3_03.webp";
import AOS from "aos";
import "aos/dist/aos.css";
const OwnerPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <div className="owner1">
        <div className="OverLay2">
          <div className="owner1-text" data-aos="fade-right">
            <div className="owner1-text-div1">LAMBORGHINI</div>
            <div className="owner1-text-div2">MODELS</div>
          </div>
        </div>
      </div>
      <div className="owner2">
        <img src={img1} alt="" className="owner2-img" />
        <div className="owner2-text">
          <div className="owner2-text-div1">CONNECTIVITY</div>
          <div className="owner2-text-div2">
            Lamborghini connected services can be used from the moment you get
            in the car via the Lamborghini Infotainment System (LIS), an
            intuitive system that accesses information directly from the Web and
            allows you to manage it quickly and easily.
          </div>
        </div>
      </div>
      <div className="owner3">
        <div className="owner3-info">
          <div className="owner3-info-div1">CUSTOMER APP</div>
          <div className="owner3-info-div2">
            Lamborghini UNICA is an exclusive app reserved for Lamborghini
            customers, enabling them to connect to the Sant’Agata
            Bolognese-based automaker at a simple tap of a finger.
          </div>
          <div className="owner3-info-div3">DISCOVER MORE</div>
        </div>
        <img src={img2} alt="" className="owner3-img1" />
        <img src={img3} alt="" className="owner3-img2" />
      </div>

      <div className="owner4">
        <div></div>
        <div className="owner4-text">
          <div className="owner4-text-div1">CLASSICS</div>
          <div className="owner4-text-div2">
            With its new Polo Storico, Automobili Lamborghini sets out to keep
            its heritage and exclusive know-how intact. There are many services
            created ad hoc to preserve the integrity of the historic vehicles,
            with maintenance and restoration aimed at faithfully following the
            original characteristics of the car. The Lamborghini Historic
            Archive, which preserves all documents made by the House of the
            Raging Bull over its long history, is also of enormous value.
          </div>
          <div className="owner4-text-div3">DISCOVER MORE</div>
        </div>
      </div>
      <div className="owner5">
        <img src={img5} alt="" className="owner5-img1" />
        <img src={img4} alt="" className="owner5-img2" />
      </div>
    </div>
  );
};

export default OwnerPage;
