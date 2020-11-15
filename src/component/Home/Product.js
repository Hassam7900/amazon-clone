import React from 'react';
import "./Product.css";
import StarIcon from '@material-ui/icons/Star';
import {useStateValue} from "../../contextApi/contextProvider"
const Product = ({id,title,price,rating,image})=> {
  const [{basket}, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type:"ADD_TO_BASKET",
      payload:
      {
        id:id,
        title:title,
        price:price,
        rating:rating,
        image:image,
    }})
}
  return (
    <div className="product">
       <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                 {[...Array(5)].map((val,i)=>{
                      const curentIndex= i+1;
                   return(
                     <StarIcon key={i}  style={{color:curentIndex<=rating?"yellow":"lightgrey"}}/>)})
                 }
            </div>
       </div>
       <img src={image}/>
       <button onClick={addToBasket}>Add to basket</button>
    </div>
  )
}
export default Product;