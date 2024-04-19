import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";

const addLike = async (userId,postId)=>{
    try{
    let likeCollection = collection(db,"like");
    addDoc(likeCollection,{
      userId: userId,
      postId: postId
    });
    }
    catch(e){
        console.log(e);
    }
    
}

export default addLike;