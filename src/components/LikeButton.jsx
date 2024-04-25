import { useState } from "react";
import likeFilled from "../images/assets/heart-fill.svg";
import like from "../images/assets/heart.svg";

const LikeButton = () => {
    const [status,setStatus] = useState(false); //true if liked
    const click = async()=>{
        setStatus(privious => !privious);

        if(status){

        }
        else{

        }
    }

    return (
        <div className="LikeButton">
          {status && <button onClick={()=>{click()}}><img src={likeFilled}></img></button>}
          {!status && <button onClick={()=>{click()}}><img src={like}></img></button>}
        </div>
    );
}
 
export default LikeButton;