import { db } from "../config/firebase";
import { getDocs, collection, where, query, orderBy } from "firebase/firestore";
import checkLiked from "./checkLiked";
import getLikeCount from "./getLikeCount";

const loadProfilePost = async (userId) => {
  try {
    const postCollection = collection(db, "post");
    const q = query(postCollection, where("userId", "==", userId), orderBy("time", "desc")); 
    const querySnapshot = await getDocs(q);

    const result = [];
    for (const doc of querySnapshot.docs) {
      const postData = doc.data(); // Extract document data for clarity
      let postDate = doc.data().time.toDate().toString();
    const dateObject = new Date(postDate);
    const formattedDate = `${dateObject.getDate()}/${String(dateObject.getMonth() + 1).padStart(2, '0')}   ${dateObject.getHours()}:${dateObject.getMinutes()}`;

      result.push({
        content: postData.content,
        isLiked: await checkLiked(userId, doc.id),
        likeCount: await getLikeCount(doc.id),
        postId: doc.id,
        time: formattedDate,
      });
    }

    return result;
  } catch (e) {
    console.error(e);
  }
};

export default loadProfilePost;
