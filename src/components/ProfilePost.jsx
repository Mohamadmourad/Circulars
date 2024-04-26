import "../styles/post.css";
import LikeButton from "./LikeButton";
import commentImg from "../images/assets/comment.svg"
import { useEffect, useState } from "react";

const ProfilePost = ({ content,userId,postId,isLiked,likeCount}) => {
  const [likes,setLikes] = useState(0);
  useEffect(()=>{
    setLikes(likeCount);
  },[]);
  const addLikeCount = ()=>{
    setLikes(privious => privious+1);
  }
  const removeLikeCount = ()=>{
    setLikes(privious => privious-1);
  }

  return (
    <div className="Post">
      <div className="postBorder">
        <div className="postContent">
          <p>{content}</p>
        </div>
      </div>
      <div className="interactions">
      <div className="likeArea">
        <LikeButton 
         isLiked={isLiked} 
         userId={userId} 
         postId={postId}
         addLikeCount = {addLikeCount}
         removeLikeCount = {removeLikeCount}/>
         <span>{likes}</span>
      </div>
        <img src={commentImg}></img>
      </div>
    </div>
  );
};

export default ProfilePost;
