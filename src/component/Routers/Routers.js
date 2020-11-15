import React, { useEffect } from 'react';
import {useStateValue} from "../../contextApi/contextProvider"
import Header from "../Header/Header";
import Home from "../Home/Home";
import Checkout from "../Checkout/Checkout";
import Payment from "../../component/Payment/Payment"
import Login from "../Login/Login";
import Orders from "../Orders/Orders";
import {Switch, Route} from "react-router-dom";
import {auth} from "../../firebase";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
const promise = loadStripe('pk_test_51Hm5kQAxodsVS4OqYex7AYWFUz9eQrKVDVh1Hh8P76jNVFfImQeQ5pOc22AMrQLXJgqGj8Q5S4SMI763W0nSySkf00WZM9p31n');

export default function Routers() {
   const [{},dispatch] = useStateValue();
  useEffect(()=>{
     auth.onAuthStateChanged(authUser=>{
       if(authUser){
           //set user in state
           console.log(`auth user >>>>>>>>>>${authUser}`);
           dispatch({
             type:"SET_USER",
             payload:{
               user:authUser
             }
           })
          
       }else{
            //set user null
            dispatch({
              type:"SET_USER",
              payload:{
                user:null
              }
            })
       }
     })
  },[])
  return (
    <div>
        
        <Switch>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/orders">
               <Header/>
               <Orders/>
            </Route>            
            <Route path="/checkout">
               <Header/>
              <Checkout/>
            </Route>
            <Route path="/payment">
               <Header/>
               <Elements stripe={promise}>
                  <Payment/>
               </Elements>
            </Route>            
            <Route path="/">
               <Header/>
               <Home/>
            </Route>
        </Switch>
    </div>
  )
}
