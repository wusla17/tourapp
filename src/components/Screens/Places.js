import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../Nav/Header";
import axios from "axios";

function Places() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios
      .get("https://traveller.talrop.works/api/v1/places")
      .then((res) => {
        // Convert the response data to an array if it is not already an array
        const placesArray = Array.isArray(res.data.data)
          ? res.data.data
          : Object.values(res.data.data);

        setPlaces(placesArray);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  const renderPlaces = () => {
    return places.map((place) => (
      <PlaceCard>
        <PlaceCardLink>
          <PlaceImage src={place.image} alt={place.name} />
          <PlaceBottomContainer>
            <PlaceTitle>{place.name}</PlaceTitle>
            <Location>
              <LocationIcon
                src={require("../../assets/images/place.svg").default}
              />
              <LocationName>{place.name}</LocationName>
            </Location>
          </PlaceBottomContainer>
        </PlaceCardLink>
      </PlaceCard>
    ));
  };

  return (
    <>
      <Helmet>
        <title>Places | Tour web</title>
      </Helmet>
      <Header />
      <TopContainer>
        <Heading>Welcome Arsh</Heading>
        <Paragaph>Explor the Worls around you</Paragaph>
      </TopContainer>

      {/* Convert the object returned by the renderPlaces() function to a valid React child before rendering it */}
      <PlacesContainer>
        {React.createElement("ul", null, renderPlaces())}
      </PlacesContainer>
    </>
  );
}

const TopContainer = styled.div``;
const Heading = styled.h1``;
const Paragaph = styled.p``;
const PlacesContainer = styled.ul``;
const PlaceCard = styled.li``;
const PlaceCardLink = styled(Link)``;
const PlaceImage = styled.img``;
const PlaceBottomContainer = styled.div``;
const PlaceTitle = styled.h3``;
const Location = styled.div``;
const LocationIcon = styled.img``;
const LocationName = styled.span``;

export default Places;
