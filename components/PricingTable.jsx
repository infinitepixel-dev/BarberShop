//PricingTable.jsx

import React from "react";
import "./PricingTable.css"; // Custom styles for gradient and hover effects

function Pricing() {
  const services = [
    {
      id: 1,
      title: "The Clean Slate",
      price: "$15",
      features: [
        "Quick trim (clippers only)",
        "Line-up cleanup",
        "No wash included",
        "Optional beard trim",
      ],
    },
    {
      id: 2,
      title: "The Standard",
      price: "$25",
      features: [
        "Scissor & clipper cut",
        "Hot towel neck shave",
        "Optional wash",
        "Style finish included",
      ],
    },
    {
      id: 3,
      title: "The Signature",
      price: "$40",
      features: [
        "Haircut (any style)",
        "Beard trim & shape-up",
        "Wash & condition",
        "Hot towel & style",
      ],
      borderClass: "border-danger",
    },
    {
      id: 4,
      title: "The Deluxe",
      price: "$60",
      features: [
        "Full Service haircut & beard",
        "Facial treatment included",
        "Scalp massage",
        "Premium styling products",
      ],
    },
  ];

  return (
    <div className="py-5 container">
      <h2 className="mb-5 text-center pricing-title fw-bold fs-2">
        <img
          // src should also import the meta base url
          src={`${import.meta.env.BASE_URL}/images/comb-icon.png
        `}
          alt="background"
          style={{
            filter: "invert(1)",
            width: "50px",
          }}
        />
        &nbsp;&nbsp; Our Services &nbsp;&nbsp;
        <img
          src={`${import.meta.env.BASE_URL}/images/comb-icon.png`}
          alt="background"
          style={{
            filter: "invert(1)",
            width: "50px",
          }}
        />
      </h2>
      <div className="row g-4">
        {services.map(({ id, title, price, features, borderClass = "" }) => (
          <div className="col-6 col-12 col-md-3" key={id}>
            <div className={`card h-100 shadow pricing-card ${borderClass}`}>
              <div className="text-white text-center card-header pricing-card-header">
                <h5 className="mb-1 card-title">{title}</h5>
                <p className="card-subtitle">{price}</p>
              </div>
              <div className="d-flex flex-column card-body">
                <ul className="mb-4 list-unstyled">
                  {features.map((f, idx) => (
                    <li key={idx} className="mb-2">
                      • {f}
                    </li>
                  ))}
                </ul>
                <button className="mt-auto w-100 fs-5 fw-bolder btn btn-danger">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
