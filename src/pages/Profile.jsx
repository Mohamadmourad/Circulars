import "../styles/profile.css"
import pfp from "../images/profile/tanjiro2.jpg"
import { useState,useEffect } from "react";
import loadProfileData from "../functions/loadProfileData";
import { useParams } from "react-router-dom";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const [isMyAcc,setIsMyAcc] = useState(true);
    const [info,setInfo] = useState({});
    const { userId } = useParams();

    const navigate = useNavigate();

    const logout = async ()=>{
      await signOut(auth);
      navigate('/');
    }


    useEffect(()=>{
        const getInfo = async ()=>{
            setInfo( await loadProfileData(userId));
          }
        getInfo();
    },[]);

    return (
        <div className="Profile">
            <div className="profileTop">
                <div className="profileTopLeft">
                  <img src={pfp} alt="pfp"/>
                  <div className="profileInfo">
                    <span>{'pfp'}</span> {/* info.username */}
                  </div>
                </div>
                <div className="followersArea">
                    <div className="following">
                        <span>Following</span>
                        <span>133</span>
                    </div>
                    <div className="followers">
                        <span>Followers</span>
                        <span>343</span>
                    </div>
                </div>
            </div>
            <div className="followBtn">  {/*follow button area */}
               {!isMyAcc && <button>Follow</button>}
               {isMyAcc && <button onClick={()=>{logout()}}>Logout</button>}
            </div>

            <h2>Posts</h2>

            <div className="postArea">
                
            </div>
        </div>
    );
}
 
export default Profile;