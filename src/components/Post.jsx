import "../styles/post.css";
import pfp from "../images/profile/tanjiro2.jpg"; // Importing the profile picture

const Post = () => {
  return (
    <div className="Post">
      <div className="postHeader">
        <img src={pfp} alt="profile" />
        <h2>John Doe</h2>
      </div>
      <div className="postBorder">
        <div className="postContent">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Error maxime
            aperiam consequuntur adipisci, deserunt quas veniam assumenda eius
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
