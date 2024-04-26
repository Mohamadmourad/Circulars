import { db,auth } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";

const addLike = async (userId,postId)=>{
    try{
    let likeCollection = collection(db,"like");
    addDoc(likeCollection,{
      userId: auth?.currentUser?.uid,
      postId: postId
    });
    }
    catch(e){
        console.log(e);
    }
    
}

export default addLike;