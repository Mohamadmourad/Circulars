import Header from "../components/Header";
import Post from "../components/Post";
import { useState, useEffect } from "react";
import loadPost from "../functions/loadPost";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await loadPost();
        setPosts(data);
        console.log(posts);
      } catch (e) {
        console.error("Error fetching posts:", e);
      } 
    };
    getData();
  }, []);

  useEffect(() => {
    console.log("Posts state updated:", posts); // Log the updated posts state
  }, [posts]);

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
            />
          ))
        }
      </div>
    </div>
  );
};

export default HomePage;
