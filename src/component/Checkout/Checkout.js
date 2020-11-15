import React from 'react'
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import FlipMove from 'react-flip-move';
import {useStateValue} from "../../contextApi/contextProvider";
export default function Checkout() {
  const [{basket,user},dispatch] = useStateValue();
  return (
    <div className="checkout">
        <div className="checkout__left">
             <img className="checkout__ad" src="data:image/jpeg;base64,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" alt=""/>
             <div>
                 <h3 className="checkout__user">{user?" Hello, "+user.email:""}</h3>
                 <h2 className="checkout__title">Your Shoping Basket</h2>
                 <FlipMove enterAnimation="fade">
                 {basket.map((item,i)=>{
                     return(
                      
                           <CheckoutProduct 
                             key={i}
                             id={item.id}
                             title={item.title}
                             price={item.price}
                             rating={item.rating}
                             image={item.image}
                           />
                        
                     )})
                  }
                  </FlipMove>
                 
             </div>
        </div>
        <div className="checkout__right">
             <Subtotal />
        </div>
    </div>
  )
}
