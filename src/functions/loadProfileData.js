import { getDocs,collection, query, where } from "firebase/firestore";
import { db } from "../config/firebase";

const loadProfileData = async (userId)=>{
 try{
    let profileContext = collection(db,"user");
    let q = query(profileContext,where("userId","==",userId));
    let result = await getDocs(q);
   
    let profile = {};

    result.forEach((doc)=>{
        profile = doc.data();
    })
    return profile;
 }
 catch(e){
    console.log(e);
    return null;
 }
}

export default loadProfileData;