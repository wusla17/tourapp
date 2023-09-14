import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import "./Home.css";
import mark from "../assets/images/place.svg";

const Home = () => {
  const [places, setPlaces] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://traveller.talrop.works/api/v1/places/")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error: " + response.statusText);
        }
      })
      .then((responseData) => {
        console.log(responseData.data); // Log the data to the console
        setPlaces(responseData.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <div className="Home-Contianer">
      <div className="Greeting">
        <h2>Welcome</h2>
        <p>Explore the World around you</p>
      </div>
      <div className="TourDiv">
        {Array.isArray(places) &&
          places.map((place) => (
            <Link
              to={`${place.id}`}
              onClick={() =>
                navigate(`/place/${place.id}`, { state: { place } })
              }
            >
              <div key={place.id}>
                <img
                  src={place.image}
                  alt={place.name}
                  className="Image-Place"
                />
                <div className="Text-Container">
                  <h2>{place.name}</h2>
                  <a>
                    <img src={mark} alt="mark" className="markImage" />
                    <span>{place.location}</span>
                  </a>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Home;
