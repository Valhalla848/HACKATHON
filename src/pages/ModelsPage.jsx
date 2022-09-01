import React, { useEffect } from "react";
import "../styles/ModelsPage.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import img1 from "../img/models/gate_family_s_01.jpeg";
import img2 from "../img/models/gate_models_s_02.webp";
import img3 from "../img/models/gate_models_s_03.webp";
import img4 from "../img/models/gate_models_s_04.webp";
import img5 from "../img/models/gate_models_over_rev_01.webp";
import img6 from "../img/models/countach_01.webp";
import img7 from "../img/models/rds_02_0.webp";
import img8 from "../img/models/asterion.webp";
import img9 from "../img/models/S2_502326.jpeg";
import icon1 from "../img/models/aventador_logo.webp";
import icon2 from "../img/models/Huracán_logo.webp";
import icon3 from "../img/models/Image 34.webp";
import AOS from "aos";
import "aos/dist/aos.css";
const ModelsPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <div className="model1">
        <div className="OverLay2">
          <div className="model1-text" data-aos="fade-right">
            <div className="model1-text-div1">LAMBORGHINI</div>
            <div className="model1-text-div2">MODELS</div>
          </div>
        </div>
      </div>
      <div className="Mainmodel2">
        <div className="model2">
          <div className="model2-left">
            <img src={icon1} alt="" className="model2-left-img" />
            <div className="model2-left-text">
              The Aventador has been created to anticipate the future, as
              demonstrated by the use of innovative technology, including a V12
              engine and the extensive use of carbon fiber. The authentic design
              masterpieces together stark dynamism with aggression to produce a
              cutting edge carbon fiber monocoque. The interior of the Aventador
              combines high-level technology and luxury equipment with
              premium-quality materials, skilfully crafted with the expertise
              characteristic of the finest Italian traditions. A supercar family
              that has already become a legend in its own right. Discover
              technical specifications, dimensions, performance, and the
              detailed features of all the new Lamborghini Aventador models.
            </div>
          </div>
          <img src={img1} alt="" className="model2-img" />
        </div>
      </div>
      <div className="Mainmodel3">
        <div className="model3">
          <div className="model3-left">
            <div className="model3-left-div1">AVENTADOR LP 780-4 ULTIMAE</div>
            <div className="model3-left-div2">
              AVENTADOR LP 780-4 ULTIMAE ROADSTER
            </div>
            <div className="model3-left-div1">AVENTADOR SVJ</div>
            <div className="model3-left-div2">AVENTADOR SVJ ROADSTER</div>
          </div>
          <img src={img2} alt="" className="model3-img" />
        </div>
      </div>
      <div className="Mainmodel4">
        <div className="model4">
          <img src={img3} alt="" className="model4-img" />
          <div className="model4-right">
            <img src={icon2} alt="" className="model4-right-img" />
            <div className="model4-right-text">
              From our past, we've learned perfection. This is how the first
              model of the Lamborghini Huracán was born. More performance, more
              control, more innovation. The Huracán is equipped with a powerful
              V10 engine and the latest technologies to perform at its absolute
              best.{" "}
              <span className="DisplNone1">
                {" "}
                Engineered to guarantee the best performance and control under
                any driving condition, it's easy to take to the limit, not to
                mention extremely fun, thanks to technology like the Lamborghini
                Doppia Frizione (LDF) dual clutch gearbox and the
                electronically-controlled four-wheel drive.{" "}
              </span>{" "}
              Enjoy the best driving experience, ever. Discover all the
              Lamborghini Huracán models.
            </div>
          </div>
        </div>
      </div>
      <div className="Mainmodel5">
        <div className="model5">
          <img src={img4} alt="" className="model5-img" />
          <div className="model5-left">
            <div className="model5-left-div1">AVENTADOR LP 780-4 ULTIMAE</div>
            <div className="model5-left-div1">
              AVENTADOR LP 780-4 ULTIMAE ROADSTER
            </div>
            <div className="model5-left-div1">AVENTADOR SVJ</div>
            <div className="model5-left-div1">AVENTADOR SVJ ROADSTER</div>
          </div>
        </div>
      </div>
      <div className="Mainmodel6">
        <div className="model6">
          <div className="model6-text">
            <img src={icon3} alt="" className="model6-text-icon" />
            <div className="model6-text-div">
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
            <div className="model6-text-div1">URUS PERFORMANTE</div>
            <div className="model6-text-div1">URUS</div>
            <div className="model6-text-div1">URUS PEARL CAPSULE</div>
            <div className="model6-text-div1">URUS GRAPHITE CAPSULE</div>
          </div>
          <img src={img5} alt="" className="model6-img" />
        </div>
      </div>
      <div className="model7">
        <div className="model7-info">
          <div className="model7-info-div1">LIMITED SERIES</div>
          <div className="model7-info-div2">
            The Limited Series Lamborghini are the most exclusive, limited
            editions to meet a small and select number of clients. Truly
            representing the state of the art in the domain of super cars, the
            Limited Series models express the highest Lamborghini spirit in
            every respect. Indeed, they are equipped with the most advanced
            features available in the fields of design and technology.
          </div>
          <div className="model7-info-div3">DISCOVER MORE</div>
        </div>
        <img src={img6} alt="" className="model7-img1" />
        <img src={img7} alt="" className="model7-img2" />
      </div>

      <div className="model8">
        <div></div>
        <div className="model8-text">
          <div className="model8-text-div1">CONCEPT</div>
          <div className="model8-text-div2">
            The most visionary models, these unique specimens are set to define
            the highest limits of technology and design. Unveiled at the most
            prestigious international Motor Shows, they offer an exclusive look
            at the most innovative solutions that Lamborghini may adopt in its
            future series-production models.
          </div>
          <div className="model8-text-div3">TERZO MILLENNIO</div>
          <div className="model8-text-div3">ASTERION</div>
          <div className="model8-text-div3">ESTOQUE</div>
        </div>
      </div>
      <div className="model9">
        <img src={img8} alt="" className="model9-img1" />
        <img src={img9} alt="" className="model9-img2" />
      </div>
      <div className="model10">
        <div className="model10-left">
          <div className="overlay-left">
            <div></div>
            <div className="model10-left-text">
              <div className="model10-left-text-div1">
                AUTOMOBILI LAMBORHINI
              </div>
              <div className="model10-left-text-div2">COMPANY</div>
            </div>
          </div>
        </div>
        <div className="model10-right">
          <div className="overlay-right">
            <div></div>
            <div className="model10-right-text">
              <div className="model10-right-text-div1">
                MAKE IT UNIQUE MAKE IT YOURS
              </div>
              <div className="model10-right-text-div2">AD PERSONAM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelsPage;
