import "../styles/commentBox.css";
import Comment from "../components/Comment";
import exitButton from "../images/assets/x.svg";
const CommentBox = () => {
  return (
    <div className="CommentBox">
      <div className="exit">
        <button className="exitButton">
          <img src={exitButton} alt="exit" className="exitIcon" />
        </button>
      </div>
      <div className="Commentsbox">
        <div className="comments">
          <Comment />
          <Comment />
          <Comment />
        </div>
        <div className="submitComment">
          <input
            type="text"
            placeholder="Add New Comment"
            className="addComment"
          />
          <button className="commentButton">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
