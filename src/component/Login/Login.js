import React, {useState} from 'react';
import "./Login.css";
import {Link, useHistory} from "react-router-dom";
import {auth} from "../../firebase";
export default function Login() {
    const history = useHistory();
    const [email, setEmail]=useState('');
    const [password,setPassword] = useState('');
    const signin = (e) =>{
         e.preventDefault();
         auth.signInWithEmailAndPassword(email, password)
         .then(auth => {
             history.push('/');
         })
         .catch(error=>console.log(error))
    }
    const register = (e) =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then(({auth})=>{
            if(auth){
               history.push('/');
            }
            setEmail('');
            setPassword('');
        })
        .catch(err=>alert(err));
        
   }
  return (
    <div className="login">
        <Link to="/">
            <img
                className="login__logo" 
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c518.png" 
            />       
        </Link> 
        <div className="login__container">
             <h2 className="login__heading">Sign in</h2>
             <form>
                 <div className="login__formRow">
                     <label>Email</label>
                     <input 
                        type="text" 
                        name="email" 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                      />
                 </div>
                 <div className="login__formRow">
                     <label>Password</label>
                     <input 
                        type="password" 
                        name="password" 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                     />
                 </div>
                 <div className="lofin__formRow">
                       <button 
                       type="submit"
                       className="login__signinBtn"
                       onClick={signin}> Sign in</button>
                 </div>
             </form>
             <p> By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
             <button 
             type="submit"
             className="login__registerBtn"
             onClick={register}>Create your Amazon account</button>
        </div>
    </div>
  )
}
