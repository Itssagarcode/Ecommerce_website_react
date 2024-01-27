import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive.png'
const Offers = () => {
  return (
    <div className="offer">
    <div className="small-container">
            <div className="col-1">
                <img src={exclusive_image} class="offer-img"/>
            </div>
            <div className="col-2">
                <h2>Exclusively Available on Boatstore</h2>
                <h2>Smart band 4</h2>
                <small>The Boat smart band 4 features a 39.9% large (than the boat band3)
                    AMOLED colour full touch display with adjustable brightness.
                </small>
                <a href="" className="btn2">Buy Now &#8594;</a>
            </div>
    </div>
</div>
  )
}

export default Offers
