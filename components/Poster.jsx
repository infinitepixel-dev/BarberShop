import React from "react";
import { Row, Col } from "react-bootstrap";

function Poster() {
  const poster = "./public/poster.png";
  return (
    <Row>
      <Col className="pricingDescription text-center p-5 mt-5">
        {/* Text content */}
      </Col>

      <Col className="text-center mt-5">
        <img src={poster} alt="Shop Hours" />
      </Col>
    </Row>
  );
}

export default Poster;
