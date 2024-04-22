import { useState, useEffect } from "react";
import addFollower from "../functions/addFollower"
import removeFollower from "../functions/removeFollower"
import checkFollow from "../functions/checkFollow";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";


const FollowBtn = ({followingId}) => {
    const [follows,setFollows] = useState(false);
    let followerId = '';

    async function getCurrentUser() {
        return new Promise((resolve) => {
          onAuthStateChanged(auth, (user) => {
            if (user) {
              resolve(user.uid);
            } else {
              resolve(null);
            }
          });
        });
      }

    useEffect(()=>{
        const getInfo = async () => {
             followerId = await getCurrentUser();
            let isFollowing = await checkFollow(followerId, followingId);
            setFollows(isFollowing);
        }
        getInfo();
    },[]);

    const click = async ()=>{
        setFollows(previous => !previous);

         if(follows == false){  // he followed
         await addFollower(await getCurrentUser(),followingId);
         }
        else{  // he unfollowed
          await removeFollower(await getCurrentUser(),followingId);
         }
    }

    return (
        <div className="FollowBtn">
          {follows && <button onClick={()=>{click()}} className="followBtnElementUnfollow">Unfollow</button>}
          {!follows && <button onClick={()=>{click()}} className="followBtnElement">Follow</button>}
        </div>
    );
}
 
export default FollowBtn;