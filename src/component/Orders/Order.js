import React from 'react'
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "../Checkout/CheckoutProduct";
import CurrencyFormat from "react-currency-format";
export default function Order({order}) {
  return (
    <div className="order">
          <h2>Order</h2>
          <p>{moment.unix(order.data.created).format("MMMM DD YYYY h:mm")}</p>
          <p className="order__id">
              <small>{order.id}</small>
          </p>
          {order.data.basket.map((item,i)=>(
            <CheckoutProduct 
                             key={i}
                             id={item.id}
                             title={item.title}
                             price={item.price}
                             rating={item.rating}
                             image={item.image}
                             hideButton
                           />              
          ))}
            <CurrencyFormat 
            renderText={(value)=> (
                    <>
                        <p className="order__total">Subtotal {order.data.basket.length} items : <strong>{value}</strong></p>
                    </>
                )
            }
            value={order.data.amount/100}
            displayType="text"
            thousandSeparator= {true}
            decimalScale={2}
            prefix={"$"}
            />          
    </div>
  )
}
