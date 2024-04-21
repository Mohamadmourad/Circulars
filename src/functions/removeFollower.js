import { db } from "../config/firebase";
import { deleteDoc,getDocs, collection, where ,query} from "firebase/firestore";

const removeFollower = async (followerId,followingId)=>{
    try{
       let fCollection = collection(db,"follow");
       let q = query(fCollection, where("followerId", "==", followerId), where("followingId", "==", followingId));
       let queryResult = await getDocs(q);
       queryResult.forEach((doc) => {
       deleteDoc(doc.ref);
    });
    }
    catch(e){
        console.log(e);
    }
}

export default removeFollower;