import "../styles/profile.css"
import { useState,useEffect } from "react";
import loadProfileData from "../functions/loadProfileData";
import { useParams } from "react-router-dom";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import FollowBtn from "../components/FollowBtn";
import getFollowerCount from "../functions/getFollowerCount";
import getFollowingCount from "../functions/getFollowingCount";

const Profile = () => {
    const [isMyAcc,setIsMyAcc] = useState(true);
    const [info,setInfo] = useState({});
    const [followersCount,setFollowersCount] = useState(5);
    const [followingCount,setFollowingCount] = useState(5);
    const [pfp,setPfp]= useState(require(`../images/profile/1.png`));

    const { userId } = useParams();

    const navigate = useNavigate();

     

    const logout = async ()=>{
      await signOut(auth);
      navigate('/');
    }

    useEffect(() => {
        const getInfo = async () => {
            setFollowersCount(await getFollowerCount(userId));
            setFollowingCount(await getFollowingCount(userId));

            if (userId !== auth?.currentUser?.uid) { // to check if its my acc
                setIsMyAcc(false);
            }  

            const profileData = await loadProfileData(userId); // Load profile data
            setInfo(profileData);
            
            if(info.photoLink != null){
                setPfp(require(`../images/profile/${info.photoLink}`));
            }
        }
    
        getInfo();
    }, [info.photoLink]);
    

    return (
        <div className="Profile">
            <div className="profileTop">
                <div className="profileTopLeft">
                  <img src={ pfp } alt="pfp"/>
                  <div className="profileInfo">
                    <span>{ info.username }</span> 
                  </div>
                </div>
                <div className="followersArea">
                    <div className="following">
                        <span>Following</span>
                        <span>{followersCount}</span>
                    </div>
                    <div className="followers">
                        <span>Followers</span>
                        <span>{followingCount}</span>
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