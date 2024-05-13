import { collection, deleteDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const deletePost = async (postId) =>{
  try{
    let c = collection(db,"post");
  let postRef = doc(c, postId); 
  let querySnapshot = await getDoc(postRef);

  await deleteDoc(querySnapshot.ref);
  window.location.reload();
  }
  catch(e){
    console.error(e);
  }
}

export default deletePost;