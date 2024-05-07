import { collection, deleteDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const deletePost = async (postId) =>{
  let c = collection(db,"post");
  let postRef = doc(c, postId); 
  let querySnapshot = await getDoc(postRef);

  await deleteDoc(querySnapshot.ref);
  window.location.reload();
}

export default deletePost;