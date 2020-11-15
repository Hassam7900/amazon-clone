import React from 'react';
import "./Home.css";
import Product from "./Product";
import FlipMove from 'react-flip-move';
export default function Home() {
  return (
    <div className="home">
       <div className="home__container">
          <img 
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
       </div>
       
       <div className="home__row">
            <Product
               key="1"
               id="1"
              title="CHUWI Herobook Pro 14.1 inch Windows 10 Intel N4000 Dual Core 8GB RAM 256GB ROM Notebook,Thin and Lightweight Laptop,BT4.0 (Herobook Pro(2020))"
               price={19.02}
               rating="5"
               image="https://images-na.ssl-images-amazon.com/images/I/81QPYddn4pL._AC_SX679_.jpg"
            />
            
            <Product
               id="2"
              title="CHUWI Herobook Pro 14.1 inch Windows 10 Intel N4000 Dual Core 8GB RAM 256GB ROM Notebook,Thin and Lightweight Laptop,BT4.0 (Herobook Pro(2020))"
               price={19.00}
               rating="4"
               image="https://images-na.ssl-images-amazon.com/images/I/71KbMIkK9gL._AC_SX466_.jpg"
            />
       </div>
       
       <div className="home__row">
            <Product
              id="3"
              title="CHUWI Herobook Pro 14.1 inch Windows 10 Intel N4000 Dual Core 8GB RAM 256GB ROM Notebook,Thin and Lightweight Laptop,BT4.0 (Herobook Pro(2020))"
               price={19.06}
               rating="5"
               image="https://images-na.ssl-images-amazon.com/images/I/51lNKDmD87L._AC_UX522_.jpg"
            />
            <Product
              id="4"
              title="CHUWI Herobook Pro 14.1 inch Windows 10 Intel N4000 Dual Core 8GB RAM 256GB ROM Notebook,Thin and Lightweight Laptop,BT4.0 (Herobook Pro(2020))"
               price={19.07}
               rating="5"
               image="https://images-na.ssl-images-amazon.com/images/I/61xq8SNSERL._AC_SX679_.jpg"
            />
            <Product
             id="5"
              title="CHUWI Herobook Pro 14.1 inch Windows 10 Intel N4000 Dual Core 8GB RAM 256GB ROM Notebook,Thin and Lightweight Laptop,BT4.0 (Herobook Pro(2020))"
               price={19.09}
               rating="5"
               image="https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/bday_cupcakes_19_noto_email_v2016_us-main._CB442981827_.png"
            />

       </div>
       <div className="home__row">
             <Product
                id="6"
              title="CHUWI Herobook Pro 14.1 inch Windows 10 Intel N4000 Dual Core 8GB RAM 256GB ROM Notebook,Thin and Lightweight Laptop,BT4.0 (Herobook Pro(2020))"
               price= {19.10}
               rating="5"
               image="https://images-na.ssl-images-amazon.com/images/I/71k45hZkLmL._AC_SX679_.jpg"
            />
       </div>              
    </div>
  )
}
