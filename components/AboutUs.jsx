//AboutUs.jsx
import { Card, Container, Row, Col } from "react-bootstrap";

const AboutUs = () => {
  return (
    <section
      className="py-2"
      style={{
        width: "100%",
        marginLeft: "0",
        marginRight: "0",
      }}
    >
      <div className="p-2 container-fluid">
        <div className="align-items-start justify-content-center row g-5">
          {/* Image Section */}
          <div className="d-flex align-items-center justify-content-center col-md-5">
            <img
              src="https://images.unsplash.com/photo-1629881544138-c45fc917eb81?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Barbershop Interior"
              className="shadow-sm rounded-3 img-fluid"
              style={{
                maxHeight: "100svh",
                objectFit: "cover",
                //media queries
                marginBottom: "0.5rem",
              }}
            />
          </div>

          {/* Content Section */}
          <div
            className="col-md-7"
            style={{
              position: "relative",
            }}
          >
            <div className="py-4">
              <Row className="justify-content-center">
                <Col md={7}>
                  <Card className="shadow-sm mb-4">
                    <Card.Body>
                      <Card.Title as="h2" className="mb-3 fw-bold">
                        About Us
                      </Card.Title>
                      <Card.Text className="text-muted">
                        For over 20 years, <strong>Fresh Cuts</strong> has been
                        a cornerstone of the community in providing top-tier
                        grooming services to our loyal customers. From classic
                        cuts and fresh fades to timeless styles with a modern
                        twist, we've built a reputation for excellence that
                        spans generations.
                      </Card.Text>
                      <Card.Text className="text-muted">
                        <strong>Founded in 2003</strong> by a group of
                        passionate barbers, our shop started as a humble local
                        business but has grown into a trusted place where every
                        visit feels like catching up with an old friend. We are
                        proud of our heritage and the relationships we've built,
                        and we continue to carry forward the legacy of skilled
                        craftsmanship, precision, and dedication to our craft.
                      </Card.Text>
                    </Card.Body>
                  </Card>

                  <Card className="shadow-sm mb-4">
                    <Card.Body>
                      <Card.Title as="h3" className="mb-3">
                        Our Services
                      </Card.Title>
                      <Card.Text className="text-muted">
                        We offer a wide range of services to meet your grooming
                        needs, including:
                      </Card.Text>
                      <ul className="text-muted">
                        <li>Classic haircuts</li>
                        <li>Modern fades & designs</li>
                        <li>Beard trims and shaping</li>
                        <li>Shaves with hot towels</li>
                        <li>Kids' haircuts</li>
                        <li>Special event grooming</li>
                      </ul>
                    </Card.Body>
                  </Card>

                  <Card className="shadow-sm mb-4">
                    <Card.Body>
                      <Card.Title as="h3" className="mb-3">
                        Our Team
                      </Card.Title>
                      <Card.Text className="text-muted">
                        Our team consists of seasoned professionals who are
                        passionate about their craft. Each barber is expertly
                        trained and stays up-to-date with the latest trends and
                        techniques to ensure you get the best service.
                      </Card.Text>
                      <Card.Text className="text-muted">
                        We believe in ongoing education and attending industry
                        events to maintain a high standard of care. Our barbers
                        are not only skilled professionals but also friendly and
                        welcoming, ensuring that your visit is always a pleasant
                        and comfortable experience.
                      </Card.Text>
                    </Card.Body>
                  </Card>

                  <Card className="shadow-sm mb-4">
                    <Card.Body>
                      <Card.Title as="h3" className="mb-3">
                        Why Choose Us?
                      </Card.Title>
                      <Card.Text className="text-muted">
                        What sets us apart from other barbershops is our
                        commitment to quality, tradition, and customer care. Our
                        goal is not just to give you a haircut but to provide an
                        experience that leaves you feeling refreshed and
                        confident.
                      </Card.Text>
                      <Card.Text className="text-muted">
                        We take the time to listen to your needs and offer
                        personalized consultations, making sure that every cut,
                        trim, or shave is tailored to suit your individual
                        style.
                      </Card.Text>
                      <Card.Text className="mb-0 text-muted">
                        From the moment you walk in, you'll notice our welcoming
                        atmosphere, our attention to detail, and our unwavering
                        commitment to excellence. Whether you're a regular or
                        it's your first time in the chair, you're always treated
                        like part of the Barber's Corner family.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>

            {/*  */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
