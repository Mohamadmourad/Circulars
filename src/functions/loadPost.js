import { db } from "../config/firebase";
import { getDocs, collection, orderBy } from "firebase/firestore";
import loadProfileData from "./loadProfileData";

const loadPost = async () => {
  let result = [];
  let postCollection = collection(db, "post");

  let data = await getDocs(postCollection);

  await Promise.all(data.docs.map(async (doc) => {
    let user = doc.data().userId;
    let post = doc.data().content;
    let userData = await loadProfileData(user);
    result.push({
      content: post,
      userId: user,
      username: userData.username,
      photoLink: userData.photoLink
    });
  }));

  return result;
}

export default loadPost;