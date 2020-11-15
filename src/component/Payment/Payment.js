import React, { useState, useEffect } from 'react';
import "./Payment.css";
import {Link,useHistory} from "react-router-dom";
import {useStateValue} from "../../contextApi/contextProvider";
import CheckoutProduct from "../Checkout/CheckoutProduct";
import {CardElement,useStripe,useElements} from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import {getBasketTotal} from "../../contextApi/Reducers/reducer";
import {db} from "../../firebase";
import axios  from  "../Common/axios";
export default function Payment() {
    const [{basket,user},dispatch] = useStateValue();
    const history = useHistory();
    const stripe = useStripe();
    const elements = useElements();
    const [error,setError]=useState(null);
    const [disabled,setDisabled] = useState(true);
    const [succeeded,setSucceeded] = useState(false);
    const [processing,setProcessing] = useState("");
    const [clientSecret,setClientSecret] = useState(true);
    
    const handleChange =(e) => {
          setDisabled(e.empty);
          setError(e.error?e.error.message:"");
    }
    useEffect(()=>{
         const getClientSecret = async () => {
              const response = await axios({
                method:"post",
                //stripe expect the total in currency subunit like $->cents
                url:`/payment/create?total=${getBasketTotal(basket)*100}`
              })
              setClientSecret(response.data.clientSecret);
         }
         getClientSecret();
    },[basket])
    console.log("secret key is >>>>" + clientSecret);
    const handleSubmit = async (e) =>{
           e.preventDefault();
           setProcessing(true);
           const payload = await stripe.confirmCardPayment(clientSecret,{
             payment_method:{
               card: elements.getElement(CardElement),
             }
           }).then(({paymentIntent})=>{
             //payment confirmation
             setSucceeded(true);
             setError(null);
             setProcessing(false);
             db
               .collection("users")
               .doc(user?.uid)
               .collection("orders")
               .doc(paymentIntent.id)
               .set({
                 basket:basket,
                 amount:paymentIntent.amount,
                 created:paymentIntent.created
               })
             dispatch({
               type:"EMPTY_BASKET"
             })
             history.replace("/orders")
           })
    }
  return (
    <div className="payment">
       <div className="payment__container">
               <h1>Checkout (<Link to="/checkout">{basket?.length} items</Link>)</h1>
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment__address">
                    <p>{user?.email}</p>
                    <p>street 11 bahria town phase 4</p>
                </div>
           </div>
           <div className="payment__section">
                <div className="payment__title">
                    <h3> Review item and delivery</h3>
                </div>
                <div className="payment__item">
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
                         
                      )
                     })}
                </div>
           </div>
           <div className="payment__section">
                <div className="payment__title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment__details">
                     <form onSubmit={handleSubmit}>
                       <CardElement onChange={handleChange} />
                       <div className="payment__priceContainer">
                          <CurrencyFormat 
                            renderText={(value)=> (
                                    <>
                                        <p> Order Total : <strong>{value}</strong></p>
                                        
                                    </>
                                )
                            }
                            value={getBasketTotal(basket)}
                            displayType="text"
                            thousandSeparator= {true}
                            decimalScale={2}
                            prefix={"$"}
                            />    
                            <div>    
                            <button className="payment__buyBtn" disabled={disabled||processing||succeeded}>
                                {processing?"Processing":"Buy Now"}
                            </button>       
                            </div>            
                       </div>
                       {error?<div>{error}</div>:""}
                     </form>
                </div>
           </div>
       </div>
    </div>
  )
}
