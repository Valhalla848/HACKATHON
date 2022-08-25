import React from "react";
import "../styles/OwnerShipPage.css";

const OwnerShipPage = () => {
  return (
    <div className="OwnerShipPage">
      <div className="OwnerShip">
        <div className="OwnerShipPage-text">
          <span className="OwnerShipPage-span1">HOME / OWNERSHIP</span>
          <span className="OwnerShipPage-span2">LAMBORGHINI</span>
          <span className="OwnerShipPage-span3">OWNERSHIP</span>
        </div>
      </div>
      <div className="OwnerShip_2">
        <img
          src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/gateway/ownership/over/gate_ownership_over_01_0.jpg"
          alt=""
          className="OwnerShip2-img-img"
        />
        <span className="OwnerShipPage2-span1">CONNECTIVITY</span>
        <span className="OwnerShipPage2-span2">
          Lamborghini connected services can be used from the moment you get in
          the car via the Lamborghini Infotainment System (LIS), an intuitive
          system that accesses information directly from the Web and allows you
          to manage it quickly and easily.
        </span>
        <span className="OwnerShipPage2-span3">
          DISCOVER MORE <hr />
        </span>
      </div>
      <div className="OwnerShip_3">
        <span className="OwnerShipPage3-span1">CUSTOMER APP</span>
        <span className="OwnerShipPage3-span2">
          Lamborghini UNICA is an exclusive app reserved for Lamborghini
          customers, enabling them to connect to the Sant’Agata Bolognese-based
          automaker at a simple tap of a finger.
        </span>
        <span className="OwnerShipPage3-span3">
          DISCOVER MORE <hr />
        </span>
        <img
          src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/contact_us/over/contact_us_over_01.jpg"
          alt=""
          className="OwnerShip3-img1-img1"
        />
        <img
          src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/gateway/ownership/s/gate_ownership_s1_02.jpg"
          alt=""
          className="OwnerShip3-img2-img2"
        />
      </div>
      <div className="OwnerShip_4">
        <span className="OwnerShipPage4-span1">CLASSICS</span>
        <span className="OwnerShipPage4-span2">
          With its new Polo Storico, Automobili Lamborghini sets out to keep its
          heritage and exclusive know-how intact. There are many services
          created ad hoc to preserve the integrity of the historic vehicles,
          with maintenance and restoration aimed at faithfully following the
          original characteristics of the car. The Lamborghini Historic Archive,
          which preserves all documents made by the House of the Raging Bull
          over its long history, is also of enormous value.
        </span>
        <span className="OwnerShipPage4-span3">
          DISCOVER MORE <hr />
        </span>
        <img
          src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/gateway/ownership/s/gate_ownership_s3_03.jpg"
          alt=""
          className="OwnerShip4-img1-img1"
        />
        <img
          src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/gateway/ownership/s/gate_ownership_s3_02.jpg"
          alt=""
          className="OwnerShip4-img2-img2"
        />
      </div>
    </div>
  );
};

export default OwnerShipPage;
