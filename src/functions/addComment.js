import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";

const addComment = async (posId,userId,content)=>{
  let commentCollection = collection(db,"comment");

  await addDoc(commentCollection,{
    userId: userId,
    postId: posId,
    content: content
  });
}

export default addComment;