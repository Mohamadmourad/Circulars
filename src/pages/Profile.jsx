import "../styles/profile.css";
import { useState, useEffect } from "react";
import loadProfileData from "../functions/loadProfileData";
import { Link, useParams } from "react-router-dom";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import FollowBtn from "../components/FollowBtn";
import getFollowerCount from "../functions/getFollowerCount";
import getFollowingCount from "../functions/getFollowingCount";
import exitImg from "../images/assets/exit.svg";
import ProfilePost from "../components/ProfilePost";
import loadProfilePost from "../functions/loadProfilePost";
import Loader from "../components/Loader";

const Profile = () => {
  const [isMyAcc, setIsMyAcc] = useState(false);
  const [info, setInfo] = useState({});
  const [followersCount, setFollowersCount] = useState(5);
  const [followingCount, setFollowingCount] = useState(5);
  const [pfp, setPfp] = useState(require(`../images/profile/loading.png`));
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(true);

  const { userId } = useParams();

  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };

  const exit = () => {
    navigate(-1);
  };

  const increseFollowerCount = () => {
    setFollowersCount((previous) => previous + 1);
  };

  const decreseFollowerCount = () => {
    setFollowersCount((previous) => previous - 1);
  };

  useEffect(() => {
    const getInfo = async () => {
      setFollowingCount(await getFollowerCount(userId));
      setFollowersCount(await getFollowingCount(userId));
      setPostList(await loadProfilePost(userId));
      setLoading(false);
      if (userId == auth?.currentUser?.uid) {
        setIsMyAcc(true); // to check if its my acc
      }

      const profileData = await loadProfileData(userId); // Load profile data
      setInfo(profileData);

      if (info.photoLink != null) {
        setPfp(require(`../images/profile/${info.photoLink}`));
      }
    };

    getInfo();
  }, [info.photoLink]);

  return (
    <div className="Profile">
      <button
        className="exitButton"
        onClick={() => {
          exit();
        }}
      >
        <img src={exitImg}></img>
      </button>
      <div className="profileTop">
        <div className="profileTopLeft">
          <div className="profileImg">
            <img src={pfp} alt="pfp" />
          </div>

          <div className="profileInfo">
            <span className="profileHeader">
              {info.username}
            </span>
          </div>
        </div>
        <div className="followersArea">
          <div className="following">
            <span>Following</span>
            <span>{followingCount}</span>
          </div>
          <div className="followers">
            <span>Followers</span>
            <span>{followersCount}</span>
          </div>
        </div>
      </div>
      <div className="followBtn">
        {" "}
        {/*follow button area */}
        {!isMyAcc && !loading && (
          <FollowBtn
            followingId={userId}
            decreseFollowerCount={decreseFollowerCount}
            increseFollowerCount={increseFollowerCount}
          />
        )}
        {isMyAcc && !loading && (
          <button
            onClick={() => {
              logout();
            }}
          >
            Logout
          </button>
        )}
      </div>

      <div className="postsHead">
        <h2>Posts</h2>
      </div>

      <div className="postArea">
        {!loading &&
          postList.map((post) => (
            <ProfilePost
              content={post.content}
              isLiked={post.isLiked}
              likeCount={post.likeCount}
              postId={post.postId}
              time={post.time}
              key={post.postId}
            />
          ))}
        {loading && (
          <div className="loadingProfile">
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
