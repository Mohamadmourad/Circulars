import { db } from "../config/firebase";
import { getDocs, collection, where ,query } from "firebase/firestore";

const getFollowingCount = async (userId)=>{
    try{
        let count = 0;
        let followCollection = collection(db,"follow");
        let q = query(followCollection, where("followingId", "==", userId));
        let queryResult = await getDocs(q);
        queryResult.forEach(() => {
            count++;
     });
     return count;
     }
     catch(e){
         console.log(e);
     }
}

export default getFollowingCount;