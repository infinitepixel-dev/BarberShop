import React from 'react'

function Poster() {
    const poster = './public/poster.png'
  return (
  <div>
    <div className="row">
        <div className="col pricingDescription">
            <p className='sectionDescription p-5 mt-5'>
            We believe in providing top-notch grooming services at affordable prices. Our pricing is designed to cater to every customer's needs while maintaining the highest quality standards. Whether you're looking for a classic haircut, a beard trim, or a complete grooming package, you'll find our rates competitive and our services exceptional. Check out our pricing below:
            </p>
        </div>
        <div className="row">
            <div className="col mt-5 text-center">
                <img src={poster} alt="Shop Hours"/>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Poster