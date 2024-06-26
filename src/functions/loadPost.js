import { auth, db } from "../config/firebase";
import { getDocs, collection, orderBy, query } from "firebase/firestore";
import loadProfileData from "./loadProfileData";
import checkLiked from "./checkLiked";
import getLikeCount from "./getLikeCount";

const loadPost = async () => {
  try{
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

    let isLiked = false;
    if(auth.currentUser?.uid?.length > 0 && auth.currentUser){
      let currentUser = auth.currentUser.uid;
       isLiked = await checkLiked(currentUser, doc.id);
    }
    else{
       isLiked = false; 
    }
    const userData = await loadProfileData(user);
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
  catch(e){
    console.error(e);
  }
}

export default loadPost;