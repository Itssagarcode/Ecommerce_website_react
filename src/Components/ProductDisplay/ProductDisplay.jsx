import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_dull_icon from "../Assets/star_dull_icon.png"
import star_icon from "../Assets/star_icon.png"
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src= {product.image} alt="" />
            <img src= {product.image} alt="" />
            <img src= {product.image} alt="" />
            <img src= {product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">${product.old_price}</div>
            <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="product-righ-description">
        With crystal-clear audio and minimal latency, our Immortal Series earbuds ensure you never miss a beat in the virtual world. The ergonomic design guarantees extended comfort during intense gaming sessions.
        </div>
        <div className="productdisplay-right-size">


        </div>
        <button onClick={()=>{addToCart(product.id)}}>Add TO CART</button>
        <p className='productdisplay-right-category'><span>category :</span>Women, T-shirt, Crop Top</p>
        <p className='productdisplay-right-category'><span>Tags :</span>Modern latest</p>
      </div>
    </div>
  )
}
export default ProductDisplay;