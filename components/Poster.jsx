import React from "react";
import { Row, Col } from "react-bootstrap";
import PricingTable from './PricingTable'


function Poster() {
  const poster = "./public/posterTop.png";
  return (
    <>
      <Row>
        <Col className="text-center mt-5">
          <img src={poster} alt="Shop Hours" />
        </Col>
      </Row>
      <Row>
        <PricingTable />
      </Row>
    </>
  );
}

export default Poster;
