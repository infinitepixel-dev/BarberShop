import React, { useEffect } from "react"
import Navigation from "./Navigation"
import bgVideo from "../src/assets/bgVideo.mp4"
import PricingTable from "./PricingTable"
import "./Homepage.css"
import "animate.css/animate.min.css"

import { Container, Row, Col } from "react-bootstrap"
import Barbers from "./Barbers"

function Homepage() {
  useEffect(() => {
    const siteLogo = document.querySelector(".siteLogo")
    if (siteLogo) {
      siteLogo.classList.add("animate__fadeInDown")
    }
  }, [])

  return (
    <Container fluid>
      <Navigation />

      {/* Video Background with Hero Text */}
      <div className="video-container">
        <video autoPlay loop muted src={bgVideo} type="video/mp4">
          Your browser does not support the video tag.
        </video>

        <Row
          className="text-white align-items-center justify-content-center w-100 h-100"
          id="heroContent"
        >
          <Col xs={12} md={8} className="text-center">
            <h1 className="mb-3 display-2 fw-bold">
              Fresh Cuts.
              <br />
              Classic Vibes.
            </h1>
            <h5 className="mb-4">fade, line-up, beard trim - we got you.</h5>
            <div className="flex-wrap gap-3 d-flex justify-content-center">
              <button className="px-4 py-2 text-dark btn btn-warning fw-semibold">
                Book Appointment
              </button>
              <button className="px-4 py-2 btn-outline-light btn">
                See Services
              </button>
            </div>
          </Col>
        </Row>
      </div>

      {/* Poster Section */}
      <Row>
        <Col>
          <PricingTable />
        </Col>
      </Row>

      <Row>
        <Col>
          <Barbers />
        </Col>
      </Row>
    </Container>
  )
}

export default Homepage
