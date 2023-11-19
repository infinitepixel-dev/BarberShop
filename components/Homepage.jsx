import React from "react";
import Navigation from "./Navigation";
import bgVideo from "../src/assets/bgVideo.mp4";
import Poster from "./Poster";

import "./Homepage.css";
import "animate.css/animate.min.css";

import { useEffect } from "react";
// import LocationFinder from './LocationFinder';
import { Container, Row, Col } from "react-bootstrap";
import PricingTable from "./PricingTable";

function Homepage() {
  useEffect(() => {
    const siteLogo = document.querySelector(".siteLogo");
    if (siteLogo) {
      siteLogo.classList.add("animate__fadeInDown");
    }
  }, []);

  return (
    <Container id="homepageContainer" fluid>
      <Navigation />
      <div className="video-container">
        <video autoPlay loop muted src={bgVideo} type="video/mp4">
          Your browser does not support the video tag.
        </video>

        <Row className="justify-content-center" id="logoRow">
          <Col>
            <div className="logo-container">
              <img
                src="./public/logo.png"
                alt="Barber Shop Hair Salon Studio"
                className="siteLogo animate__animated"
              />
            </div>
          </Col>
        </Row>
      </div>

      <Row>
        <Col>
          <Poster />
        </Col>
      </Row>

      <Row>
        <Col>{/* <LocationFinder /> */} Location Finder Here</Col>
      </Row>
    </Container>
  );
}

export default Homepage;
