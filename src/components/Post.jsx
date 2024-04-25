import "../styles/post.css";
import { Link } from "react-router-dom";
import LikeButton from "./LikeButton";
import commentImg from "../images/assets/comment.svg"

const Post = ({username,content,photoLink,userId}) => {
   let photoUrl = require(`../images/profile/${photoLink}`);
  return (
    <div className="Post">
      <Link className="postHeader" to={`/profile/${userId}`}>
        <img src={photoUrl} alt="profile" />
        <h2>{ username }</h2>
      </Link>
      <div className="postBorder">
        <div className="postContent">
          <p>
            { content }
          </p>
        </div>
      </div>
      <div className="interactions">
      <LikeButton />
      <img src={commentImg}></img>
      </div>
    </div>
  );
};

export default Post;
