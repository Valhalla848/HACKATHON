import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "../styles/DealerPage.css";

const DealerPage = () => {
  const position = [54.352877, 46.993765];
  return (
    <div className="HeadPage">
      <div className="dealer-right">
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
  );
};

export default DealerPage;
