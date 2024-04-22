import "../styles/profile.css"
import pfp from "../images/profile/tanjiro2.jpg"
import { useState,useEffect } from "react";
import loadProfileData from "../functions/loadProfileData";
import { useParams } from "react-router-dom";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import FollowBtn from "../components/FollowBtn";
import checkFollow from "../functions/checkFollow";

const Profile = () => {
    const [isMyAcc,setIsMyAcc] = useState(true);
    const [info,setInfo] = useState({});
    const [followState,setFollowState] = useState(false);

    const { userId } = useParams();

    const navigate = useNavigate();

    const logout = async ()=>{
      await signOut(auth);
      navigate('/');
    }


    useEffect(() => {
        const getInfo = async () => {
            if (userId !== auth?.currentUser?.uid) {
                setIsMyAcc(false);
            }
            
            setInfo(await loadProfileData(userId));
        }
    
        getInfo();
    
    }, [followState]);
    

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
               {!isMyAcc && <FollowBtn followingId={userId}/>}
               {isMyAcc && <button onClick={()=>{logout()}}>Logout</button>}
            </div>

            <h2>Posts</h2>

            <div className="postArea">
                
            </div>
        </div>
    );
}
 
export default Profile;