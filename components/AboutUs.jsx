const AboutUs = () => {
  return (
    <section
      className="py-2"
      style={{
        background:
          "repeating-linear-gradient(90deg, #f8f9fa, #f8f9fa 1px, #ffffff 1px, #ffffff 100%)",
        width: "100%",
        marginLeft: "0",
        marginRight: "0",
      }}
    >
      <div className="container-fluid px-0">
        <div className="customBG row justify-content-center align-items-center g-5">
          {/* Image Section */}
          <div className="col-md-5">
            <img
              src="https://images.unsplash.com/photo-1629881544138-c45fc917eb81?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Barbershop Interior"
              className="img-fluid rounded-3 shadow-sm"
            />
          </div>

          {/* Content Section */}
          <div className="col-md-7">
            <h2 className="fw-bold  mb-3 p-2">About Us</h2>
            <p className="text-muted p-4">
              For over 20 years,<strong>Fresh Cuts</strong> has been a
              cornerstone of the community in providing top-tier grooming
              services to our loyal customers. From classic cuts and fresh fades
              to timeless styles with a modern twist, we've built a reputation
              for excellence that spans generations.
            </p>

            <p className="text-muted p-4">
              <strong>Founded in 2003</strong> by a group of passionate barbers,
              our shop started as a humble local business but has grown into a
              trusted place where every visit feels like catching up with an old
              friend. We are proud of our heritage and the relationships we've
              built, and we continue to carry forward the legacy of skilled
              craftsmanship, precision, and dedication to our craft.
            </p>

            <h3 className="mt-4 p-2">Our Services</h3>
            <p className="text-muted p-4">
              We offer a wide range of services to meet your grooming needs,
              including:
            </p>
            <ul className="text-muted p-4">
              <li>Classic haircuts</li>
              <li>Modern fades & designs</li>
              <li>Beard trims and shaping</li>
              <li>Shaves with hot towels</li>
              <li>Kids' haircuts</li>
              <li>Special event grooming</li>
            </ul>

            <h3 className="mt-4 p-2">Our Team</h3>
            <p className="text-muted p-4">
              Our team consists of seasoned professionals who are passionate
              about their craft. Each barber is expertly trained and stays
              up-to-date with the latest trends and techniques to ensure you get
              the best service. We believe in ongoing education and attending
              industry events to maintain a high standard of care. Our barbers
              are not only skilled professionals but also friendly and
              welcoming, ensuring that your visit is always a pleasant and
              comfortable experience.
            </p>

            <h3 className="mt-4 p-2">Why Choose Us?</h3>
            <p className="text-muted p-4">
              What sets us apart from other barbershops is our commitment to
              quality, tradition, and customer care. Our goal is not just to
              give you a haircut but to provide an experience that leaves you
              feeling refreshed and confident. We take the time to listen to
              your needs and offer personalized consultations, making sure that
              every cut, trim, or shave is tailored to suit your individual
              style.
            </p>

            <p className="mb-0 text-muted p-4">
              From the moment you walk in, you&amp;ll notice our welcoming
              atmosphere, our attention to detail, and our unwavering commitment
              to excellence. Whether you're a regular or it's your first time in
              the chair, you're always treated like part of the Barber's Corner
              family.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
