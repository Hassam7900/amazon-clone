import React, {forwardRef} from 'react'
import "./CheckoutProduct.css";
import StarIcon from "@material-ui/icons/Star";
import {useStateValue} from "../../contextApi/contextProvider";
const CheckoutProduct= forwardRef(({id,title,price,rating,image,hideButton},ref)=> {
    const [{basket},dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type:"REMOVE_FROM_BASKET",
            payload:{
                id
            }
        })
    }
  return (
                <div className="checkoutProduct" ref={ref}>
                    <img className="checkoutProduct__image" src={image} alt="" />
                    <div className="checkoutProduct__info">
                        <p className="checkoutProduct__title">{title}</p>
                        <p className="checkoutProduct__price">
                            <small>$</small>
                            <strong>{price}</strong>
                        </p>
                        <div className="checkoutProduct__rating">
                            {[...Array(5)].map((val,i)=>{
                            const curentIndex= i+1;
                            return(
                                <StarIcon key={i}  style={{color:curentIndex<=rating?"yellow":"lightgrey"}}/>)})
                                }
                        </div>
                        {!hideButton&&(<button onClick={removeFromBasket}>Remove from Basket</button>)}
                                             
                    </div>
                </div>
  )
}
)
export default CheckoutProduct;