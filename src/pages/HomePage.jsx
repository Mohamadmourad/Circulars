import BottomNav from "../components/BottomNav";
import Header from "../components/Header";
import Post from "../components/Post";
import loadPost from "../functions/loadPost";
import { useState, useEffect } from "react";
import ReactLoading from 'react-loading';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await loadPost();
        setPosts(data);
        setLoading(false);
      } catch (e) {
        console.error(e);
      } 
    };
    getData();
  }, []);

  return (
    <div className="HomePage">
      <Header />
      <div className="posts">
        {!loading &&
          posts.map((post, index) => (
            <Post
              key={index}
              userId={post.userId}
              username={post.username}
              content={post.content}
              photoLink={post.photoLink}
              isLiked = {post.isLiked}
              postId = {post.postId}
              likeCount = {post.likeCount}
            />
          ))
        }
        {loading &&
          <div className="loading">
            <ReactLoading type={"bubbles"} color={"#3Fc1C9"} height={100} width={100} />
          </div>
        }
      </div>
      
      <BottomNav />
    </div>
  );
};

export default HomePage;
