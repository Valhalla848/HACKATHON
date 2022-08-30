import React, { useEffect } from "react";
import "../styles/Museum.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
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
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ReactSwipe from "react-swipe";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import logoPartners from "../image/imagesForMuseum/logo-partner.webp";
import AOS from "aos";
import "aos/dist/aos.css";
const MuseumPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const position = [54.352877, 46.993765];
  let reactSwipeEl;
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="mus">
      <div className="mus1">
        <Slider {...settings} className="mus1-slider">
          <div className="mus1-slider-header">
            <img src={headerImg3} alt="" className="mus1-slider-header-img" />
            <div className="mus1-slider-header-text" data-aos="fade-right">
              <div className="mus1-slider-header-text-div1">
                LAMBORGHINI MUSEUM
              </div>
              <div className="mus1-slider-header-text-div2">MUDETEC</div>
            </div>
          </div>
          <div className="mus1-slider-header">
            <img src={headerImg2} alt="" className="mus1-slider-header-img" />
            <div className="mus1-slider-header-text" data-aos="fade-right">
              <div className="mus1-slider-header-text-div1">
                LAMBORGHINI MUSEUM
              </div>
              <div className="mus1-slider-header-text-div2">MUDETEC</div>
            </div>
          </div>
          <div className="mus1-slider-header">
            <img src={headerImg} alt="" className="mus1-slider-header-img" />
            <div className="mus1-slider-header-text" data-aos="fade-right">
              <div className="mus1-slider-header-text-div1">
                LAMBORGHINI MUSEUM
              </div>
              <div className="mus1-slider-header-text-div2">MUDETEC</div>
            </div>
          </div>
        </Slider>
      </div>

      <div className="Mainmus2">
        <div className="mus2">
          <div className="mus2-text">
            <div className="mus2-text-div1">CUSTOMIZATION</div>
            <div className="mus2-text-div2">
              The Ad Personam customisation program is available for the Huracán
              and Aventador, giving customers the chance to create their own
              personal Lamborghini, making it extra special and meeting any
              wish.
            </div>
            <div className="mus2-text-div3">
              Customers wishing to take advantage of the customisation program
              can design their own vehicle directly with Ad Personam Studio, the
              area dedicated to customisation based at the Sant’Agata Bolognese
              HQ.
            </div>
            <div className="mus2-text-div4">DISCOVER MORE</div>
          </div>
          <img src={carImg1} alt="" className="mus2-img" />
        </div>
      </div>
      <div className="mus3">
        <img src={carImg2} alt="" className="mus3-img mus3-img1" />
        <img src={carImg3} alt="" className="mus3-img mus3-img2" />
      </div>
      <div className="Mainmus4">
        <div className="mus4">
          <img src={carImg4} alt="" className="mus4-img" />
          <div className="mus4-info">
            <div className="mus4-info-div1">ACCESSORIES</div>
            <div className="mus4-info-div2">
              Accessori Originali Automobili Lamborghini allows you to express
              your personality to the fullest and make your Lamborghini even
              more unique.The goal remains the same: to exceed our customers’
              expectations of quality and service. Each and every accessory
              features outstanding quality, breakthrough technology, Lamborghini
              signature design, and the utmost attention to the smallest
              details.
            </div>
            <div className="mus4-info-div3">DISCOVER MORE</div>
          </div>
        </div>
      </div>

      <div className="Mainmus5">
        <div className="mus5">
          <div className="mus5-text">
            <div className="mus5-text-div1">CUSTOMIZATION</div>
            <div className="mus5-text-div2">
              The Ad Personam customisation program is available for the Huracán
              and Aventador, giving customers the chance to create their own
              personal Lamborghini, making it extra special and meeting any
              wish.
            </div>
            <div className="mus5-text-div3">
              Customers wishing to take advantage of the customisation program
              can design their own vehicle directly with Ad Personam Studio, the
              area dedicated to customisation based at the Sant’Agata Bolognese
              HQ.
            </div>
            <div className="mus5-text-div4">DISCOVER MORE</div>
          </div>
          <img src={carImg5} alt="" className="mus5-img" />
        </div>
      </div>
      <div className="mus6">
        <img src={carImg6} alt="" className="mus6-img mus6-img1" />
        <img src={carImg7} alt="" className="mus6-img mus6-img2" />
      </div>
      <div className="Mainmus7">
        <div className="mus7">
          <img src={carImg8} alt="" className="mus7-img" />
          <div className="mus7-info">
            <div className="mus7-info-div1">ACCESSORIES</div>
            <div className="mus7-info-div2">
              Accessori Originali Automobili Lamborghini allows you to express
              your personality to the fullest and make your Lamborghini even
              more unique.The goal remains the same: to exceed our customers’
              expectations of quality and service. Each and every accessory
              features outstanding quality, breakthrough technology, Lamborghini
              signature design, and the utmost attention to the smallest
              details.
            </div>
            <div className="mus7-info-div3">DISCOVER MORE</div>
          </div>
        </div>
      </div>
      <div className="mus8">
        <button
          className="mus8-info-btn-prev"
          onClick={() => reactSwipeEl.prev()}
        >
          <ArrowBackIosIcon />
        </button>
        <button
          className="mus8-info-btn-next"
          onClick={() => reactSwipeEl.next()}
        >
          <ArrowForwardIosIcon />
        </button>
        <div className="mus8Main">
          <ReactSwipe
            className="mus8Swiper"
            swipeOptions={{ continuous: false }}
            ref={(el) => (reactSwipeEl = el)}
          >
            <div className="mus8test">
              {" "}
              <img src={headerImg} alt="" className="mus8-img" />{" "}
            </div>
            <div className="mus8test">
              {" "}
              <img src={headerImg2} alt="" className="mus8-img" />{" "}
            </div>
            <div className="mus8test">
              {" "}
              <img src={headerImg3} alt="" className="mus8-img" />{" "}
            </div>
          </ReactSwipe>
        </div>
      </div>
      <div className="Mainmus9">
        <div className="mus9">
          <div style={{ marginLeft: "5%" }} className="mus9-left">
            <div className="mus9-left-div1">CONTACTS</div>
            <div className="mus9-left-div2">
              Via Modena, 12 40019 Sant’Agata
            </div>
            <div className="mus9-left-div2">Bolognese (Bologna) - Italy</div>
            <div className="mus9-left-div2">Phone: +39 051 681 7611</div>
            <div className="mus9-left-div3">
              <button className="mus9-left-div3-btn">
                <ArrowForwardIosIcon />
              </button>
              <div className="mus9-left-div3-text">Driving Directions</div>
            </div>
          </div>
          <div className="mus9-right">
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
      <div className="Mainmus10">
        <div className="mus10">
          <h2 className="mus10-text">INFORMATION</h2>
          <div className="mus10-main">
            <div className="mus10-left">
              <h2>
                <span className="mus10-info1">EDUCATIONAL VISITS</span>
                <br />
                <span className="mus10-info2">
                  School and university groups must book in advance.
                </span>
              </h2>

              <h2 style={{ marginTop: "60px" }}>
                <span className="mus10-info1">PICTURES AND VIDEO SHOOTING</span>
                <br />
                <span className="mus10-info2">
                  Pictures and videos may be taken inside the Museum for private
                  use only. No <br /> photography or video recording is allowed
                  during the factory visit. Before the start of <br /> the tour,
                  participants will be asked to leave cameras, cellphones, and
                  all other <br /> equipment able to take photos and/or video
                  recordings in the lockers provided.
                </span>
              </h2>
              <h2 style={{ margin: "60px 0" }}>
                <span className="mus10-info1">ARCHITECTURAL BARRIERS</span>
                <br />
                <span className="mus10-info2">
                  The Museum has no architectural barriers. Visits take place
                  over two floors, and a lift <br /> is available for persons
                  with limited mobility..
                </span>
              </h2>
            </div>
            <div className="mus10-right">
              <h2>
                <span className="mus10-info1">RESTRICTIONS</span>
                <br />
                <span className="mus10-info2">
                  Visitors are not permitted to touch the vehicles and materials
                  on display, and it is not permitted to enter the vehicles or
                  remove anything from the Museum. Eating is not allowed inside
                  the Museum. Animals may not enter, with the exception of guide
                  dogs for the blind. Visitors are asked to behave in a manner
                  appropriate for a museum, showing respect to the staff and
                  other visitors; this includes their choice of attire and tone
                  of voice. Those accompanying children and minors are
                  responsible for their behavior at all times. The use of
                  cellular phones is permitted as long as care is taken not to
                  disturb or inconvenience others.
                </span>
              </h2>
              <h2 style={{ marginTop: "40px" }}>
                <span className="mus10-info1">REDUCED RATES</span>
                <br />
                <span className="mus10-info2">
                  Documents certifying the right to reduced admission fees must
                  be shown to staff on request.
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="mus11">
        <h2 className="mus11-h1">PARTNERS</h2>
        <img className="mus11-img" src={logoPartners} alt="" />
      </div>
    </div>
  );
};

export default MuseumPage;
