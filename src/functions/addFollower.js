import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";

const addFollower = async (followerId,followingId)=>{
  try{
    let fCollection = collection(db,"follow");

  await addDoc(fCollection,{
    followerId: followerId,
    followingId: followingId
  });
  }
  catch(e){
    console.error(e);
  }
}

export default addFollower;