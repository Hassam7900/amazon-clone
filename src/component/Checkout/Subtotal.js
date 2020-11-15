import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "../../contextApi/contextProvider";
import {getBasketTotal} from "../../contextApi/Reducers/reducer";
import {useHistory} from "react-router-dom";
export default function Subtotal() {
  const [{basket}] = useStateValue();
  const history = useHistory();
  return (
      <div className="subtotal">
            <CurrencyFormat 
            renderText={(value)=> (
                    <>
                        <p>Subtotal {basket.length} items : <strong>{value}</strong></p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/>This order contains a gift
                        </small>
                    </>
                )
            }
            value={getBasketTotal(basket)}
            displayType="text"
            thousandSeparator= {true}
            decimalScale={2}
            prefix={"$"}
            />
            <button onClick={()=>history.push("/payment")}>Proceed to Checkout</button>
    </div>
  )
}
