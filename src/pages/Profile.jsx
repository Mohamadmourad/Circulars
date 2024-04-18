import "../styles/profile.css"
import pfp from "../images/profile/tanjiro2.jpg"
import { useState } from "react";

const Profile = () => {
    const [isMyAcc,setIsMyAcc] = useState(false);

    return (
        <div className="Profile">
            <div className="profileTop">
                <div className="profileTopLeft">
                  <img src={pfp} alt="pfp"/>
                  <div className="profileInfo">
                    <span>Mohamad Mourad</span>
                    <p className="bio">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error praesentium odit autem suscipit omnis accusamus nam ratione, inventore incidunt</p> 
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
               {isMyAcc && <button>Follow</button>}
            </div>

            <h2>Posts</h2>

            <div className="postArea">
                
            </div>
        </div>
    );
}
 
export default Profile;