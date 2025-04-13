import React, { useState, useEffect } from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"

function Navigation() {
  const [showNavigation, setShowNavigation] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowNavigation(true)
      } else {
        setShowNavigation(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  //

  return (
    <Navbar
      expand="lg"
      className={`navbar navbar-expand-lg ${showNavigation ? "visible" : ""}`}
    >
      <Container>
        <Navbar.Brand href="#home">Fresh Cuts Hair Studio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto col-sm-12">
            <Nav.Link className="nav-link " href="#home">
              Home
            </Nav.Link>
            <div className="border m-2"></div>
            <Nav.Link href="#link">About Us</Nav.Link>
            <div className="border m-2"></div>
            <Nav.Link href="#link">Contact Us</Nav.Link>
            <div className="border m-2"></div>
            <Nav.Link href="#link">Book An Appointment</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
