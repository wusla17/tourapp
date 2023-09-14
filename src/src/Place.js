import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../App.css";
import "./Place.css";
import mark from "../assets/images/place.svg";

const Place = () => {
  const location = useLocation();
  const place = location.state.place;
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://traveller.talrop.works/api/v1/places/categories/")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error: " + response.statusText);
        }
      })
      .then((responseData) => {
        setCategories(responseData.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="Place-Container">
      <div className="wrapper">
        <div className="Place-Info">
          <h2>{place.name}</h2>
          <a>
            {categories.map((category) => (
              <span key={category.id} className="category">
                {category.name}
              </span>
            ))}
            <img src={mark} alt="mark" className="markImage" />
            <span>{place.location}</span>
          </a>
          <p>{place.description}</p>
        </div>
        <div className="Image">
          <div className="Place-Image">
            <img src={place.image} alt={place.name} className="Image-Place" />
          </div>
          <div className="Category-Images">
            {categories.map((category) => (
              <img
                key={category.id}
                src={category.image}
                alt={category.name}
                className="Category-Image"
              />
            ))}
          </div>
        </div>
        <h3 className="Details">Place Details</h3>
        <div className="Place-Details">
          <p>
            Lorem jnfjafiaff afoafiaf fkafoahfihe afaohfaifiafei feifgwiefiug
            wgwefojewofnwfwfwfnejkfofknksfs dcolso cow jdowel jowjefenwf
            woeifuiwhekjchwicw ceo ecowviovio wochscosfioweh0fowf w cejkfu cow
            eohevohfbvoioadfhksdjc sdc wckwio a{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Place;
