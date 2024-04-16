import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png"
import "../styles/header.css"

const Header = () => {
    const [isLogedIn,setIsLogIn] = useState(false);
    return (
        <header>
          <a><img src={ logo }/></a>
          <nav>
            {!isLogedIn &&   //if user is not loged in
             <div className="btnContainer">
              <Link to="/" className="signUpBtn">SignUp</Link>
              <Link to="/" className="logInBtn">LogIn</Link>
            </div>}

            {isLogedIn &&   //if user is loged in
             <div className="container">
              
            </div>}
          </nav>
        </header>
    );
}
 
export default Header;