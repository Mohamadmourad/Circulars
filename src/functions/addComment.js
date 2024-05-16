import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";

const addComment = async (postId, userId, content) => {
    try {
        if(content.length === 0){
            return;
        }
       let c = collection(db, "comment");
         await addDoc(c, {
              postId : postId,
              userId : userId,
              content : content,
              time: new Date()
         }); // prevent to send empty comment

    } catch (e) {
        console.log(e);
    }
}

export default addComment;