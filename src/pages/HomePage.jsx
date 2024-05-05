import BottomNav from "../components/BottomNav";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Post from "../components/Post";
import loadPost from "../functions/loadPost";
import { useState, useEffect } from "react";


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
              isLiked={post.isLiked}
              postId={post.postId}
              likeCount={post.likeCount}
              time={post.time}
            />
          ))}
        {loading && (
          <div className="loading">
            <Loader />
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
};

export default HomePage;
