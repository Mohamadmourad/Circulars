import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import "../styles/header.css";
import { auth } from "../config/firebase";
import { onAuthStateChanged, getAuth, signOut } from "firebase/auth";
import pfp from "../images/profile/tanjiro2.jpg";

const Header = () => {
  const [isLogedIn, setIsLogIn] = useState(false);
  const [userId, setUserId] = useState(null);

  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserId(user.uid);
      setIsLogIn(true);
    } else {
      setIsLogIn(false);
    }
  });

  return (
    <header>
      <a>
        <img src={logo} />
      </a>
      <nav>
        {!isLogedIn && ( //if user is not loged in
          <div className="btnContainer">
            <Link to="/SignUp" className="signUpBtn">
              SignUp
            </Link>
            <Link to="/Login" className="logInBtn">
              Login
            </Link>
          </div>
        )}

        {isLogedIn && ( //if user is logged in
          <div className="prfcontainer">
            <span className="innerTxtHeader">
              <NavLink to="/">Home</NavLink>
            </span>
            <span className="innerTxtHeader">
              <NavLink to="/createPost">Create Post</NavLink>
            </span>
            <span>
              <Link to={`/profile/${userId}`}>
                <img src={pfp} alt="pfpImg" />
              </Link>
            </span>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
