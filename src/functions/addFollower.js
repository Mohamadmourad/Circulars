import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";

const addFollower = async (followerId,followingId)=>{
  let fCollection = collection(db,"follow");

  await addDoc(fCollection,{
    followerId: followerId,
    followingId: followingId
  });
}

export default addFollower;