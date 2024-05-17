import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../config/firebase";
import loadProfileData from "./loadProfileData";

const loadComments = async (postId)=>{
  let result = [];
  let c = collection(db, "comment");
  let q = query(c,where("postId","==",postId),orderBy("time", "desc"));// add a clause to order comments

  let data = await getDocs(q);
  
  for(const doc of data.docs){
    let cmnt = doc.data();
    let user = await loadProfileData(cmnt.userId);
    cmnt.username = user.username;
    result.push(cmnt);
  }
    return result;
    
}

export default loadComments;