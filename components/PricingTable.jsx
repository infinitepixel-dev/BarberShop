import React from "react"

function Pricing() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="mb-4 col-lg-3 col-md-6">
          <div className="card">
            <div className="text-center card-body">
              <h5 className="card-title">
                <strong>Buzz Cut</strong>
              </h5>
              <h6 className="mb-2 card-subtitle text-muted">
                <strong>$15</strong>
              </h6>
              <ul className="list-unstyled">
                <li>Quick trim (clippers only)</li>
                <li>Line-up cleanup</li>
                <li>No wash included</li>
                <li>Optional beard trim</li>
              </ul>
              <button className="btn btn-primary">Book Now</button>
            </div>
          </div>
        </div>

        <div className="mb-4 col-lg-3 col-md-6">
          <div className="card">
            <div className="text-center card-body">
              <h5 className="card-title">
                <strong>Classic Cut</strong>
              </h5>
              <h6 className="mb-2 card-subtitle text-muted">
                <strong>$25</strong>
              </h6>
              <ul className="list-unstyled">
                <li>Scissor & clipper cut</li>
                <li>Hot towel neck shave</li>
                <li>Optional wash</li>
                <li>Style finish included</li>
              </ul>
              <button className="btn btn-primary">Book Now</button>
            </div>
          </div>
        </div>

        <div className="mb-4 col-lg-3 col-md-6">
          <div className="card border-danger">
            <div className="text-center card-body">
              <h5 className="card-title">
                <strong>Full Service</strong>
              </h5>
              <h6 className="mb-2 card-subtitle text-muted">
                <strong>$40</strong>
              </h6>
              <ul className="list-unstyled">
                <li>Haircut (any style)</li>
                <li>Beard trim & shape-up</li>
                <li>Wash & condition</li>
                <li>Hot towel & style</li>
              </ul>
              <button className="btn btn-primary">Book Now</button>
            </div>
          </div>
        </div>

        <div className="mb-4 col-lg-3 col-md-6">
          <div className="card">
            <div className="text-center card-body">
              <h5 className="card-title">
                <strong>Gentleman's Package</strong>
              </h5>
              <h6 className="mb-2 card-subtitle text-muted">
                <strong>$60</strong>
              </h6>
              <ul className="list-unstyled">
                <li>Full Service haircut & beard</li>
                <li>Facial treatment included</li>
                <li>Scalp massage</li>
                <li>Premium styling products</li>
              </ul>
              <button className="btn btn-primary">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
