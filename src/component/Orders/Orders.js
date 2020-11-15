import React, { useState, useEffect } from 'react'
import "./Orders.css";
import {useStateValue} from "../../contextApi/contextProvider";
import {db} from "../../firebase";
import Order from "./Order";
export default function Orders() {
    const [orders,setOrders] = useState([]);
    const [{user}] = useStateValue();
    useEffect(()=>{
        if(user)
            {db.collection("users")
            .doc(user?.uid)
            .collection("orders")
            .orderBy('created','desc')
            .onSnapshot(snapshot=>(
                setOrders( snapshot.docs.map((doc)=>
                   ( { id : doc.id,
                    data : doc.data()})
                ))
            ))}else{
                setOrders([]);
            }
            
    },[user])
    console.log("orders",orders);
  return (
    <div className="orders">
       <div className="order__order">
           <h2>Yours Orders</h2>
             {orders.map((order,i)=>{
                 return(
                     <div key={i}>
                         <Order order={order}/>
                     </div>

                 )
             })}
       </div>
    </div>
  )
}
