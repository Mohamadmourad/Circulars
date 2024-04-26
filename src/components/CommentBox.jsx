import "../styles/commentBox.css";
import Comment from "../components/Comment";
import exitButton from "../images/assets/x.svg";

function exitCommentBox() {
  const commentBox = document.querySelector("#CommentBox");
  commentBox.style.display = "none";

}
const CommentBox = () => {
  return (
    <div className="CommentBox" id="CommentBox">
      <div className="exit">
        <button className="exitButton" onClick={() =>{exitCommentBox()}}>
          <img src={exitButton} alt="exit" />
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
