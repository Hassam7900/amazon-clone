import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom";
import {useStateValue} from "../../contextApi/contextProvider";
import {auth} from "../../firebase";
export default function Header() {
     const [{basket,user}] = useStateValue();
     const handleAuthentication=()=>{
          if(user){
               auth.signOut();
          }
     }
  return (
    <div className="header">
         <Link to="/">
        <img
            className="header__logo" 
            src="https://www.pinclipart.com/picdir/big/57-576184_view-our-amazon-storefront-amazon-logo-white-png.png" 
        />
        </Link>
         <div className="header__search">
               <input 
                    className="header__searchInput" 
                    type="text" 
               />
               <SearchIcon
                 className="header__searchIcon"
                />
         </div>
         <div className="header__nav">
          <Link to={!user&&"/login"}>
            <div onClick={handleAuthentication} className="header__option">
                 <span
                  className="header__optionOne"
                    >{user?"welcome "+user.email:"Hello Guest"}</span>
                 <span
                  className="header__optionTwo"
                 >{user?"sign out":"sign in"}</span>
            </div>
            </Link>
            <Link to="/orders">
            <div className="header__option">
                 <span
                  className="header__optionOne"
                 >Returns </span>
                 <span
                  className="header__optionTwo"
                 >& Orders</span>                 
            </div>
            </Link>
            <div className="header__option">
                 <span
                  className="header__optionOne"
                 >Your</span>
                 <span
                  className="header__optionTwo"
                 >Prime</span>
            </div>
            <Link to="/checkout">
            <div className="header__optionBasket">
                <ShoppingBasketIcon  />
                <span className="header__optionTwo header__basketCount">{basket.length}</span>
            </div>
            </Link>
         </div>
    </div>
  )
}
