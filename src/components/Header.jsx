import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import "../styles/header.css";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import loadProfileData from "../functions/loadProfileData";

const Header = () => {
  const [isLogedIn, setIsLogIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [info,setInfo] = useState({});
  const [pfp,setPfp]= useState(require(`../images/profile/loading.png`));

  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserId(user.uid);
      setIsLogIn(true);
    } else {
      setIsLogIn(false);
    }
  });

  useEffect(()=>{
    const getData = async ()=>{
      if(isLogedIn){
        const data = await loadProfileData(userId);
        setInfo(data);

        if(info.photoLink != null){
          setPfp(require(`../images/profile/${info.photoLink}`));
      }
      }
    }
    getData();
  },[info.photoLink,isLogedIn]);

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
                <img src={ pfp } alt="pfpImg" />
              </Link>
            </span>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
