import React from "react";
import { useLocation } from "react-router-dom";
import "../App.css";
import "./Place.css";
import mark from "../assets/images/place.svg";

const Place = () => {
  const location = useLocation();
  const place = location.state.place;

  return (
    <div className="Place-Container">
      <div className="wrapper">
        <div className="Place-Info">
          <h2>{place.name}</h2>
          <a>
            <img src={mark} alt="mark" className="markImage" />
            <span>{place.location}</span>
          </a>
          {/* Assuming place object has a description property */}
          <p>{place.description}</p>
        </div>
        <div className="Place-Image">
          <img src={place.image} alt={place.name} className="Image-Place" />
        </div>
      </div>
    </div>
  );
};

export default Place;
