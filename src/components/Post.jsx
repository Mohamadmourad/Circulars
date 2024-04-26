import "../styles/post.css";
import { Link } from "react-router-dom";
import LikeButton from "./LikeButton";
import commentImg from "../images/assets/comment.svg";
import { useEffect, useState } from "react";
import CommentBox from "../components/CommentBox.jsx";
function displayCommentBox() {
  const commentBox = document.querySelector("#CommentBox");
  commentBox.style.display = "block";

}

const Post = ({
  username,
  content,
  photoLink,
  userId,
  isLiked,
  postId,
  likeCount,
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
        <div className="commentArea">
          <button onClick={() => {displayCommentBox()}}>
            <img src={commentImg}></img>
          </button>
        </div>
      </div>
      <CommentBox />
    </div>
    
  );
};


export default Post;
