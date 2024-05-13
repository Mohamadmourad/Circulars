import '../styles/comment.css';
import exitBtn from '../images/assets/exit.svg';
import { useNavigate, useParams } from 'react-router-dom';
import CommentBox from '../components/CommentBox';
import { useEffect, useRef, useState } from 'react';
import { auth } from '../config/firebase';
import addComment from '../functions/addComment';
import loadComments from '../functions/loadComments';
import Loader from '../components/Loader';

const Comments = () => {
    const navigate = useNavigate();
    const { postId } = useParams();

    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const commentRef = useRef(null);

    const commentAddition = async () => {
        let content = commentRef.current.value;
        let userId = auth.currentUser.uid;
        await addComment(postId, userId, content);
        setComments(await loadComments(postId));
        commentRef.current.value = "";
    }

    useEffect(() => {
        const getInfo = async () => {
            setComments(await loadComments(postId));
            setIsLoading(false);
        }
        getInfo();
    }, [postId]);

    return (
        <div className="Comments">
            <div className="commentHeader">
                <img src={exitBtn} onClick={() => { navigate(-1) }} alt="Exit" />
                <h3>Comments</h3>
            </div>
            {isLoading ? (
                <div className="loading">
                    <Loader />
                </div>
            ) : (
                <>
                    <aside className="commentSection">
                        {comments.map((comment, index) => (
                            <CommentBox key={index} username={comment.username} content={comment.content} />
                        ))}
                    </aside>
                    <footer className="addComment">
                        <input type="text" placeholder="Add a comment" ref={commentRef} />
                        <button onClick={commentAddition}>Send</button>
                    </footer>
                </>
            )}
        </div>
    );
}

export default Comments;
