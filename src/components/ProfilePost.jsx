import "../styles/post.css";
import LikeButton from "./LikeButton";
import { useEffect, useState } from "react";
import DeletePost from "./DeletePost";

const ProfilePost = ({ content,userId,postId,isLiked,likeCount,time}) => {
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
      <aside className="time">{time} </aside>
      </div>
    </div>
  );
};

export default ProfilePost;
