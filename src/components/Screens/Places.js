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
      <PlaceCard key={place.id}>
        <PlaceCardLink to={`/place/${place.id}`}>
          <PlaceImage src={place.image} alt={place.name} />
          <PlaceBottomContainer>
            <PlaceTitle>{place.name}</PlaceTitle>
            <Location>
              <LocationIcon
                src={require("../../assets/images/place.svg").default}
              />
              <LocationName>{place.location}</LocationName>
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
        <Paragaph>Explore the World around you</Paragaph>
      </TopContainer>

      <PlacesContainer>{renderPlaces()}</PlacesContainer>
    </>
  );
}

const TopContainer = styled.div`
  width: 90%;
  margin: 100px auto 0;
`;

const Heading = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

const Paragaph = styled.p`
  font-size: 22px;
  color: #dfdfe2;
`;

const PlacesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 90%;
  margin: 50px auto 0;
`;

const PlaceCard = styled.div`
  width: calc(25% - 15px);
  margin-bottom: 25px;
  box-sizing: border-box;

  &:nth-child(4n) {
    margin-right: 0;
  }
`;

const PlaceCardLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
`;

const PlaceImage = styled.img`
  width: 100%;
  display: block;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const PlaceBottomContainer = styled.div`
  padding: 10px 15px;
`;

const PlaceTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 20px;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
`;

const LocationIcon = styled.img`
  margin-right: 10px;
`;

const LocationName = styled.span`
  font-size: 18px;
`;

export default Places;
