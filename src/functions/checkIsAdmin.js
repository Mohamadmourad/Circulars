import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebase";

const checkIsAdmin = async (userId)=>{
  let c  = collection(db, "admin");
  let q = query(c,where("adminId","==",userId));

  let querySnapshot = await getDocs(q);

    if(querySnapshot.empty)
        return false;
    else
        return true;
}
export default checkIsAdmin;