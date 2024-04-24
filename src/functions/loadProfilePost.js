import { db } from "../config/firebase";
import { getDocs, collection, where ,query } from "firebase/firestore";

const loadProfilePost = async (userId)=>{
 try {
    let result = [];
 let postCollection = collection(db,"post");
 let q = query(postCollection, where("userId", "==", userId));
 let queryRes = await getDocs(q);
 queryRes.forEach(doc =>{
    result.push(doc.data());
 })
 return result;
 }
 catch(e){
    console.error(e);
 }
}

export default loadProfilePost;