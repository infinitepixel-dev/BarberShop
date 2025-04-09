import React from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Marcus D.",
    quote:
      "Best cut I’ve had in years. These guys really care about the details.",
  },
  {
    name: "Jasmine R.",
    quote: "My son won’t let anyone else touch his hair now. Highly recommend!",
  },
  {
    name: "Eli G.",
    quote: "Super chill vibes and pro-level cuts. Five stars every time.",
  },
]

function Testimonials() {
  return (
    <section className="px-4 py-16 text-center bg-white">
      <h2 className="mb-12 text-3xl font-bold md:text-4xl">
        What Our Clients Say
      </h2>
      <div className="grid max-w-6xl gap-8 mx-auto md:grid-cols-3">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="p-6 bg-white border border-gray-100 shadow-lg rounded-2xl"
          >
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <p className="mb-4 italic text-gray-700">“{testimonial.quote}”</p>
            <h5 className="font-semibold text-gray-900">
              – {testimonial.name}
            </h5>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
