import { useState,useEffect } from "react";
import likeFilled from "../images/assets/heart-fill.svg";
import like from "../images/assets/heart.svg";
import addLike from "../functions/addLike"
import removeLike from "../functions/removeLike"

const LikeButton = ({isLiked,userId,postId}) => {
    const [status,setStatus] = useState(false); //true if liked
    useEffect(()=>{
        setStatus(isLiked);
    },[])
    const click = async()=>{
        setStatus(privious => !privious);

        if(!status){
          addLike(userId,postId);
        }
        else{
          removeLike(userId,postId);
        }
    }

    return (
        <div className="LikeButton">
          {status && <button onClick={()=>{click()}}><img src={likeFilled}></img></button>}
          {!status && <button onClick={()=>{click()}}><img src={like}></img></button>}
        </div>
    );
}
 
export default LikeButton;