import { getDocs,collection,query,where } from "firebase/firestore";
import { db } from "../config/firebase";

const checkFollow = async (followerId,followingId)=>{
    try{
        let fCollection = collection(db,"follow");
        let q = query(fCollection, where("followerId", "==", followerId), where("followingId", "==", followingId));
        let queryResult = await getDocs(q);
        if(queryResult != null)return true;
        else return false; 
     }
     catch(e){
         console.log(e);
         return false;
     }
}

export default checkFollow;