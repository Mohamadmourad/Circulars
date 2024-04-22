import { db } from "../config/firebase";
import { deleteDoc,getDocs, collection, where ,query} from "firebase/firestore";

const removeLike = async (userId,postId)=>{
    try{
       let likeCollection = collection(db,"like");
       let q = query(likeCollection, where("userId", "==", userId), where("postId", "==", postId));
       let queryResult = await getDocs(q);
       queryResult.forEach((doc) => {
       deleteDoc(doc.ref);
    });
    }
    catch(e){
        console.log(e);
    }
}

export default removeLike;