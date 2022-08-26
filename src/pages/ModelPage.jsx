import React from "react";
import "../styles/ModelPage.css";
import img1 from "../img/ModelPage3/gate_family_s_01.jpg";
import Aventador from "../img/ModelPage3/aventador_logo.webp";
import img from "../img/ModelPage3/gate_family_s_01.jpg";
import img2 from "../img/ModelPage3/gate_models_s_02.webp";
import img3 from "../img/ModelPage3/gate_models_s_03.webp";
import img4 from "../img/ModelPage3/gate_models_over_rev_01.webp";
import img5 from "../img/ModelPage3/Image 34.webp";
import img6 from "../img/ModelPage3/countach_01.webp";
import img7 from "../img/ModelPage3/gate_ownership_s1_03.jpg";
import img8 from "../img/ModelPage3/asterion.webp";
import img9 from "../img/ModelPage3/S2_502326.jpg";
import img10 from "../img/ModelPage3/image1.webp";
import img11 from "../img/ModelPage3/image2.webp";

const ModelPage = () => {
  return (
    <div className="MainModelPage">
      <div className="ModelPage">
        <div className="ModelPage-text">
          <span className="ModelPage-text-info-span1">Home / Model</span>
          <span className="ModelPage-text-info-span2">LAMBORGHINI</span>
          <span className="ModelPage-text-info-span3">MODELS</span>
          <span className="ModelPage-text-info-span4">MODELS OVERVIEW</span>
          <span className="ModelPage-text-info-span5">
            ALL LAMBORGHINI MODELS
          </span>
        </div>
      </div>
      <div className="ModelPage2">
        <div className="ModelPage2-info">
          <div className="ModelPage2-info-img">
            <img src={Aventador} alt="" className="ModelPage2-info-img-avent" />
          </div>
          <div className="ModelPage2-info-text">
            The Aventador has been created to anticipate the future, as
            demonstrated by the use of innovative technology, including a V12
            engine and the extensive use of carbon fiber.
            <br /> The authentic design masterpieces together stark dynamism
            with aggression to produce a cutting edge carbon fiber monocoque.
            The interior of the Aventador combines high-level technology and
            luxury equipment with premium-quality materials, skilfully crafted
            with the expertise characteristic of the finest Italian traditions.
            A supercar family that has already become a legend in its own right.
            Discover technical specifications, dimensions, performance, and the
            detailed features of all the new Lamborghini Aventador models
          </div>
        </div>
        <div className="ModelPage2-img">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="ModelPage3">
        <div className="ModelPage-info-text1">
          AVENTADOR LP 780-4 ULTIMAE <br />
          <br />
          AVENTADOR LP 780-4 ULTIMAE ROADSTER <br />
          <br />
          AVENTADOR SVJ <br />
          <br />
          AVENTADOR SVJ ROADSTER
        </div>

        <img src={img2} alt="" className="ModelPage3-img-img" />
      </div>
      <div className="ModelPage4">
        <div className="ModelPage4-text">
          <img
            src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/Hurac%C3%A1n_logo.png"
            alt=""
            className="ModelPage4-text-img
          "
          />
          <div className="ModelPage5-text-info">
            From our past, we've learned perfection. This is how the first model
            of the Lamborghini Huracán was born. More performance, more control,
            more innovation. The Huracán is equipped with a powerful V10 engine
            and the latest technologies to perform at its absolute best.
            Engineered to guarantee the best performance and control under any
            driving condition, it's easy to take to the limit, not to mention
            extremely fun, thanks to technology like the Lamborghini Doppia
            Frizione (LDF) dual clutch gearbox and the electronically-controlled
            four-wheel drive. Enjoy the best driving experience, ever. Discover
            all the Lamborghini Huracán models.
          </div>
        </div>
        <div className="ModelPage4">
          <div className="ModelPage-info-text2">
            <span className="ModelPage4-info-text-span1 ModelPage4-info-text-hover1">
              HURACÁN TECNICA
            </span>
            <hr className="ModelPage4-info-text-hr ModelPage4-info-text-hrhover1" />
            <span className="ModelPage4-info-text-span1 ModelPage4-info-text-hover2">
              HURACÁN STO
            </span>
            <hr className="ModelPage4-info-text-hr ModelPage4-info-text-hrhover2" />
            <span className="ModelPage4-info-text-span1 ModelPage4-info-text-hover3">
              HURACÁN EVO
            </span>
            <hr className="ModelPage4-info-text-hr ModelPage4-info-text-hrhover3" />
            <span className="ModelPage4-info-text-span1 ModelPage4-info-text-hover4">
              HURACÁN EVO SPYDER
            </span>
            <hr className="ModelPage4-info-text-hr ModelPage4-info-text-hrhover4" />
            <span className="ModelPage4-info-text-span1 ModelPage4-info-text-hover5">
              HURACÁN EVO RWD
            </span>
            <hr className="ModelPage4-info-text-hr ModelPage4-info-text-hrhover5" />
            <span className="ModelPage4-info-text-span1 ModelPage4-info-text-hover6">
              HURACÁN EVO RWD SPYDER
            </span>
            <hr className="ModelPage4-info-text-hr ModelPage4-info-text-hrhover6" />
          </div>
        </div>
        <div className="ModelPage3-img">
          <img src={img3} alt="" className="ModelPage3-img-3" />
        </div>
      </div>
      <div className="ModelPage5">
        <div className="ModelPage5-text">
          <div className="ModelPage5-text-up">
            <img src={img5} alt="" className="ModelPage5-text-up-img" />
            <div className="ModelPage5-text-up-info">
              Lamborghini Urus is the world’s first Super Sport Utility Vehicle,
              in which luxury, sportiness and performance meet comfort and
              versatility. It offers best-in-class driving dynamics, alongside
              its unmistakable elegance of design. Urus embodies the
              characteristics of multiple souls: sporty, elegant and off-road,
              and has a suitability for everyday driving in a range of
              environments. With its surprisingly distinct engine sound,
              combined with high performance, Lamborghini Urus is anything but
              typical.
            </div>
          </div>
        </div>
        <div className="ModelPage5-info-text2">
          <span className="ModelPage5-info-text-span1 ModelPage5-info-text-hover1">
            HURACÁN TECNICA
          </span>
          <hr className="ModelPage5-info-text-hr ModelPage5-info-text-hrhover1" />
          <span className="ModelPage5-info-text-span1 ModelPage5-info-text-hover2">
            HURACÁN STO
          </span>
          <hr className="ModelPage5-info-text-hr ModelPage5-info-text-hrhover2" />
          <span className="ModelPage5-info-text-span1 ModelPage5-info-text-hover3">
            HURACÁN EVO
          </span>
          <hr className="ModelPage5-info-text-hr ModelPage5-info-text-hrhover3" />
          <span className="ModelPage5-info-text-span1 ModelPage5-info-text-hover4">
            HURACÁN EVO SPYDER
          </span>
          <hr className="ModelPage5-info-text-hr ModelPage5-info-text-hrhover4" />
          <span className="ModelPage5-info-text-span1 ModelPage5-info-text-hover5">
            HURACÁN EVO RWD
          </span>
          <hr className="ModelPage5-info-text-hr ModelPage5-info-text-hrhover5" />
          <span className="ModelPage5-info-text-span1 ModelPage5-info-text-hover6">
            HURACÁN EVO RWD SPYDER
          </span>
          <hr className="ModelPage5-info-text-hr ModelPage5-info-text-hrhover6" />
        </div>
        <img src={img4} alt="" className="ModelPage5-img" />
      </div>
      <div className="ModelPage6">
        <div className="ModelPage6-text">
          <h2>LIMITED SERIES</h2>
          <div className="ModelPage7">
            <div className="ModelPage7-text">
              editions to meet a small and select number of clients. Truly
              representing the state of the art in the domain of super cars, the
              Limited Series models express the highest Lamborghini spirit in
              every respect. Indeed, they are equipped with the most advanced
              features available in the fields of design and technology. The
              Limited Series Lamborghini are the most exclusive, limited
            </div>
            <div className="ModelPage8">
              <div className="ModelPage8-text">
                COUNTACH LPI 800-4
                <br />
                SIÁN FKP 37
                <br />
                SIÁN ROADSTER
              </div>

              <img src={img6} alt="" className="ModelPage9-img9" />
            </div>
            <img src={img7} alt="" className="ModelPage10-img" />
          </div>
        </div>
      </div>

      <div className="ModelPage11-text">
        <h2> CONCEPT</h2>
        <div className="MadelPage12-text">
          The most visionary models, these unique specimens are set to define
          the highest limits of technology and design. Unveiled at the most
          prestigious international Motor Shows, they offer an exclusive look at
          the most innovative solutions that Lamborghini may adopt in its future
          series-production models.
        </div>
        <div className="ModelPage13-text">
          TERZO MILLENNIO
          <br />
          ASTERION
          <br />
          ESTOQUE
        </div>
        <img src={img8} alt="" className="ModelPage11-img" />
        <img src={img9} alt="" className="ModelPage12-img" />
      </div>
      <div className="ModelPageLast">
        <div className="ModelPageImg">
          <img src={img10} alt="" className="ModelPageLast-img" />
          <img src={img11} alt="" className="ModelPageLast-img" />
        </div>
      </div>
    </div>
  );
};

export default ModelPage;
