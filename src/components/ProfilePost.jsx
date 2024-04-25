import "../styles/post.css";
import LikeButton from "./LikeButton";
import commentImg from "../images/assets/comment.svg"

const ProfilePost = ({ content, myAccount }) => {
  return (
    <div className="Post">
      <div className="postBorder">
        <div className="postContent">
          <p>{content}</p>
        </div>
      </div>
      <div className="interactions">
        <LikeButton />
        <img src={commentImg}></img>
      </div>
    </div>
  );
};

export default ProfilePost;
