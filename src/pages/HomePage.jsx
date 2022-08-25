import React from "react";
import "../styles/HomePage.css";
import ReactSwipe from "react-swipe";
import img1 from "../img/ HomePage/Red-Lamborghini-supercar-black-background_2880x1800.jpeg";
import img2 from "../img/ HomePage/6bbb7e3ef657e13bad395ff9e08b6127.jpeg";
import img3 from "../img/ HomePage/29d91e1fab66254fa6bad00842016db3.jpeg";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import img4 from "../img/ HomePage/kisspng-lamborghini-aventador-car-lamborghini-huracxe1n-la-white-lamborghini-huracan-car-5a75276c1d9616.9170164115176272441212.png";
import img5 from "../img/ HomePage/cover.webp";
import img6 from "../img/ HomePage/cover (1).webp";
import img7 from "../img/ HomePage/forever_young_cover2.jpeg";
const HomePage = () => {
  let reactSwipeEl;
  return (
    <div className="Home">
      <div className="HomePage">
        <div className="HomePage-text">
          <span className="HomePage-text-up">URUS PERFORMANTE</span>
          <br />
          <span className="HomePage-text-down">
            FOR BAR <br /> RAISERS ONLY HEllo
          </span>
          <div className="HomePage-text-btn"></div>
        </div>
      </div>
      <div className="HomePage2">
        <div className="HomePage-info">
          <div className="HomePage-info-UpBtn">Model</div>
          <div className="HomePage-info-btn">
            <button
              className="HomePage-info-btn-prev"
              onClick={() => reactSwipeEl.prev()}
            >
              <ArrowBackIosIcon />
            </button>
            <button
              className="HomePage-info-btn-next"
              onClick={() => reactSwipeEl.next()}
            >
              <ArrowForwardIosIcon />
            </button>
          </div>
          <div className="HomePage-info-text">
            <h2 className="HomePage-info-text-h2">
              <span className="HomePage-info-text-h2-span1">Lamborghini</span>
              <br />
              <span className="HomePage-info-text-h2-span2">
                Impossible is possible
              </span>
            </h2>
          </div>
        </div>
        <div className="carouselMain">
          <ReactSwipe
            className="carousel"
            swipeOptions={{ continuous: false }}
            ref={(el) => (reactSwipeEl = el)}
          >
            <div className="test">
              {" "}
              <img src={img1} alt="" className="carousel-img" />{" "}
            </div>
            <div className="test">
              {" "}
              <img src={img2} alt="" className="carousel-img" />{" "}
            </div>
            <div className="test">
              {" "}
              <img src={img3} alt="" className="carousel-img" />{" "}
            </div>
          </ReactSwipe>
        </div>
      </div>
      <div className="MainHomePage3">
        <div className="HomePage3-Font">AVENTADOR</div>
        <div className="HomePage3">
          <div className="HomePage3-text">
            <h2 className="HomePage3-text-h2">
              <span className="HomePage3-text-h2-span1">Configurator</span>

              <span className="HomePage3-text-h2-span2">Create your</span>

              <span className="HomePage3-text-h2-span3">Aventador</span>
            </h2>
            <button className="HomePage3-text-btn">
              <ArrowForwardIosIcon />
            </button>
          </div>
          <div className="HomePage3-img">
            <img src={img4} alt="" className="HomePage3-img-img" />
          </div>
        </div>
      </div>
      <div className="HomePage4">
        <div className="HomePage4-text">
          <div className="HomePage4-text-h4">
            <span className="HomePage4-text-h4-span1">DEALER LOCATOR</span>
            <span className="HomePage4-text-h4-span2">FIND YOUR</span>
            <span className="HomePage4-text-h4-span3">COUNTRY DEALER</span>
          </div>
          <button className="HomePage4-text-btn">
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>
      <div className="MainHomePage5">
        <div className="HomePage5">
          <div className="HomePage5-text">
            <span className="HomePage5-text-span1">News</span>
            <span className="HomePage5-text-span2">Lamborghini World</span>
          </div>
          <div className="HomePage5-img">
            <img src={img5} alt="" className="HomePage5-img-img" />
          </div>
        </div>
      </div>
      <div className="MainHomePage6">
        <div className="HomePage6">
          <div className="HomePage6-text">
            <div className="HomePage6-text-first">22 August 2022</div>
            <div className="HomePage6-text-sec">
              <span className="HomePage6-text-sec-span">URUS</span>
              <span className="HomePage6-text-sec-span HomePage6-text-sec-span2">
                HURACAN
              </span>
            </div>
            <div className="HomePage6-text-three">
              LAMBORGHINI AT MONTEREY CAR WEEK 2022:
            </div>
            <div className="HomePage6-text-fourth">HIGHLIGHTS</div>
            <div className="HomePage6-text-fifth">
              Automobili Lamborghini returned to Monterey Car Week to further
              enhance the magical atmosphere of the pinnacle of automotive
              events with exclusive previews and an immersive brand experience.
            </div>
          </div>
          <div className="HomePage6-news">
            <div className="HomePage6-news-first">
              <img src={img6} alt="" className="HomePage6-news-first-img" />
              <div className="HomePage6-news-first-text">
                <div className="HomePage6-news-first-text-first">
                  19 August 2022
                </div>

                <span className="HomePage6-news-first-text-sec">URUS</span>
                <div className="HomePage6-news-first-text-third">
                  LAMBORGHINI URUS <br /> PERFORMANTE: FOR BAR RAISERS <br />{" "}
                  ONLY
                </div>
                <button className="HomePage6-news-first-text-btn">
                  READ MORE
                </button>
              </div>
            </div>
            <div className="HomePage6-news-sec">
              <img src={img7} alt="" className="HomePage6-news-first-img" />
              <div className="HomePage6-news-first-text">
                <div className="HomePage6-news-first-text-first">
                  12 August 2022
                </div>
                <div className="HomePage6-news-first-text-third HomePage6-news-sec-text-third">
                  AUTOMOBILI LAMBORGHINI'S <br /> FOREVER YOUNG PROGRAM
                </div>
                <button className="HomePage6-news-first-text-btn">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
