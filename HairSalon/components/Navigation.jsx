import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

function Navigation() {
  return (
    <Navbar expand="sm" fixed="top" variant="light" bg="transparent">
      <Navbar.Toggle aria-controls="navbarSupportedContent" />
      <Navbar.Collapse id="navbarSupportedContent">
        <Nav className="ml-auto">
          <Nav.Item>
            <Button variant="light" className="book-now" href="https://scissorsscotch.com/booking">BOOK NOW</Button>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://scissorsscotch.com/services">SERVICES</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://scissorsscotch.com/memberships">MEMBERSHIPS</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://scissorsscotch.com/careers">CAREERS</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
