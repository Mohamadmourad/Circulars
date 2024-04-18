import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png"
import "../styles/header.css"
import { auth } from "../config/firebase";
import { onAuthStateChanged,getAuth ,signOut} from "firebase/auth";

const Header = () => {
    const [isLogedIn,setIsLogIn] = useState(false);
    const [userId, setUserId] = useState(null);

    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
        setIsLogIn(true);
      }
      else{
        setIsLogIn(false);
      }
    });

    return (
        <header>
          <a><img src={ logo }/></a>
          <nav>
            {!isLogedIn &&   //if user is not loged in
             <div className="btnContainer">
              <Link to="/SignUp" className="signUpBtn">SignUp</Link>
              <Link to="/Login" className="logInBtn">Login</Link>
            </div>}

            {isLogedIn &&   //if user is loged in
             <div className="container">
               
            </div>}
          </nav>
        </header>
    );
}
 
export default Header;