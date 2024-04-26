import { db } from "../config/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

const loadComment = async (postId)=>{
 let result = [];
 let commentCollection = collection(db,"comment");
 let q = query(commentCollection,where("postId","==",postId));
 let queryResult = await getDocs(q);

 queryResult.forEach((doc)=>{
    result.push(doc.data());
 })
 
 return result;
}

export default loadComment;