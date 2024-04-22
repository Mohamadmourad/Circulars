import { getDocs,collection,query,where } from "firebase/firestore";
import { db } from "../config/firebase";
import { useState } from "react";
import { auth } from "../config/firebase";

const checkFollow = async (followerId,followingId)=>{
    try{
        let fCollection = collection(db,"follow");
        let q = query(fCollection, where("followerId", "==", followerId), where("followingId", "==", followingId));
        let queryResult = await getDocs(q);
        return queryResult.size > 0;
     }
     catch(e){
         return false;
     }
}

export default checkFollow;