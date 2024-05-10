import "../styles/post.css";
import { Link } from "react-router-dom";
import LikeButton from "./LikeButton";
import { useEffect, useState } from "react";
import deletePost from "../functions/deletePost";


const Post = ({
  username,
  content,
  photoLink,
  userId,
  isLiked,
  postId,
  likeCount,
  time,
  isAdmin,
}) => {
  let photoUrl = require(`../images/profile/${photoLink}`);
  let [likes, setLikes] = useState(0);
  const addLike = () => {
    setLikes((privious) => privious + 1);
  };
  const removeLike = () => {
    setLikes((privious) => privious - 1);
  };
  useEffect(() => {
    setLikes(likeCount);
  }, []);

  return (
    <div className="Post">
      <Link className="postHeader" to={`/profile/${userId}`}>
        <img src={photoUrl} alt="profile" />
        <h2>{username}</h2>
      </Link>
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
            addLikeCount={addLike}
            removeLikeCount={removeLike}
          />
          <span>{likes}</span>
        </div>
        <aside className="time">{time}</aside>
      </div>
      {isAdmin && (
            <div className="deleteArea">
              <button className="delete" onClick={()=>{deletePost(postId)}}>Delete</button>
            </div>
        )}
    </div>
    
  );
};


export default Post;
