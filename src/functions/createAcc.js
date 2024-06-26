import { db } from "../config/firebase";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

const createAcc = async (email, pass,username) => {
  try {
    await createUserWithEmailAndPassword(auth, email, pass);

      const userCollection = collection(db, "user");
      await addDoc(userCollection, {
        userId: auth.currentUser.uid,
        username: username,
        photoLink: randomImg(),
        bio: "Circulars users"
      })

  }
  catch(e){
    console.log(e);
  }
}

const randomImg = ()=>{
  return `${Math.floor(Math.random() * 11)+1}.png`
}

export default createAcc;