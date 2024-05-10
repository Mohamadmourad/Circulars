import { auth, db } from "../config/firebase";
import { getDocs, collection, orderBy, query } from "firebase/firestore";
import loadProfileData from "./loadProfileData";
import checkLiked from "./checkLiked";
import getLikeCount from "./getLikeCount";
import checkIsAdmin from "./checkIsAdmin";

const loadPost = async () => {
  let postCollection = collection(db, "post");

  let q = query(postCollection, orderBy("time", "desc"));

  const posts = await getDocs(q);
  const results = [];

  for (const doc of posts.docs) {
    const user = doc.data().userId;
    const post = doc.data().content;
    let postDate = doc.data().time.toDate().toString();
    const dateObject = new Date(postDate);
    const formattedDate = `${dateObject.getDate()}/${String(dateObject.getMonth() + 1).padStart(2, '0')}   ${dateObject.getHours()}:${dateObject.getMinutes()}`;


    let currentUser = auth.currentUser.uid;
    const userData = await loadProfileData(user);
    const isLiked = await checkLiked(currentUser, doc.id);
    const likeCount = await getLikeCount(doc.id);

    results.push({
        content: post,
        userId: user,
        username: userData.username,
        photoLink: userData.photoLink,
        isLiked,
        likeCount,
        postId: doc.id,
        time: formattedDate,
    });
}

return results;
}

export default loadPost;