import React from "react"
import "./Barbers.css"

function Barbers() {
  const team = [
    {
      name: "Amara K.",
      quote: "Precision is everything.",
      img: "./face1.jpg", // Replace with actual image URLs
    },
    {
      name: "Adrian M.'",
      quote: "A good fade speaks louder than words.",
      img: "./face2.jpg",
    },
    {
      name: "Chelsea W.'",
      quote: "Confidence starts with a sharp cut.",
      img: "./face3.jpg",
    },
  ]

  return (
    <div className="py-5 text-center text-white barbers-section ">
      <h2 className="mb-4 fw-bold">Meet Your Barbers</h2>
      <p className="px-3 mb-5">
        Our skilled team brings passion, precision, and personality to every
        cut. Whether you’re going for classic or modern, we’ve got you covered.
      </p>
      <div className="flex-wrap gap-4 barbers-grid d-flex justify-content-center">
        {team.map((barber, index) => (
          <div
            className="p-4 text-dark barber-card bg-light rounded-4"
            key={index}
          >
            <img
              src={barber.img}
              alt={barber.name}
              className="mb-3 barber-img rounded-circle"
            />
            <h5 className="fw-bold">{barber.name}</h5>
            <p className="fst-italic">"{barber.quote}"</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Barbers
