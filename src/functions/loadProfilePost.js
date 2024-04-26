import { db } from "../config/firebase";
import { getDocs, collection, where ,query} from "firebase/firestore";
import checkLiked from "./checkLiked";
import getLikeCount from "./getLikeCount";

const loadProfilePost = async (userId)=>{
 try {
    let result = [];
 let postCollection = collection(db,"post");
 let q = query(postCollection, where("userId", "==", userId));
 let queryRes = await getDocs(q);

 await Promise.all(queryRes.docs.map(async(doc) =>{
    result.push({
      content: doc.data().content,
      isLiked: await checkLiked(userId,doc.id),
      likeCount: await getLikeCount(doc.id),
      postId : doc.id
    });
 }))
 return result;
 }

 catch(e){
    console.error(e);
 }
}

export default loadProfilePost;