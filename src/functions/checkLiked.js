import { getDocs,collection,query,where } from "firebase/firestore";
import { db } from "../config/firebase";


const checkLiked = async (userId,postId)=>{
  let likeCollection = collection(db,"like");

  let q = query(likeCollection,where("userId","==",userId),where("postId","==",postId));
  let data = await getDocs(q);
  let count = 0;

  data.forEach((doc)=>{
    count++;
  });

  if(count > 0){
    return true;
  }
  else{
    return false;
  }

}

export default checkLiked;