import React from "react";
import { Row, Col } from "react-bootstrap";
import PricingTable from "./PricingTable";

function Poster() {
  const poster = "./public/posterTop.png";
  return (
    <>
      <Row>
        <Col className="mt-5 text-center">
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
