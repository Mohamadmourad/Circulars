import BottomNav from "../components/BottomNav";
import Header from "../components/Header";
import Post from "../components/Post";
import loadPost from "../functions/loadPost";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await loadPost();
        setPosts(data);
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
        {
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
      </div>
      <BottomNav />
    </div>
  );
};

export default HomePage;
