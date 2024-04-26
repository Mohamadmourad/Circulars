import { db } from "../config/firebase";
import { getDocs, collection, where ,query } from "firebase/firestore";

const getLikeCount = async (postId)=>{
  let count = 0;
  let likeCollection = collection(db,"like");

  let q = query(likeCollection, where("postId","==",postId));
  let queryRes = await getDocs(q);

  queryRes.forEach((like)=>{
    count++;
  })
  
  return count;
}

export default getLikeCount;