import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";

const addComment = async (postId,userId,content)=>{
  let commentCollection = collection(db,"comment");

  await addDoc(commentCollection,{
    userId: userId,
    postId: postId,
    content: content
  });
}

export default addComment;