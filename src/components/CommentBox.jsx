import { Link } from "react-router-dom";

const CommentBox = ({content,username}) => {
    return (
        <div className="CommentBox">
          <span>{username}</span>
          <aside>{content}</aside>
        </div>
    );
}
 
export default CommentBox;