import "../styles/bottomNav.css"
import { Link,NavLink } from "react-router-dom";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import loadProfileData from "../functions/loadProfileData";
import { useState, useEffect } from "react";

const BottomNav = () => {
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
        <div className="BottomNav">
            {userId ?<nav>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/createPost'}>Add Post</NavLink>
                <Link to={`/profile/${userId}`}>
                <img src={ pfp } alt="pfpImg" />
              </Link>
            </nav> : <div></div>}
        </div>
    );
}
 
export default BottomNav;