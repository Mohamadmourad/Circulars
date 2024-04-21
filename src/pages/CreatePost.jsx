import '../styles/forms.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { db,auth } from '../config/firebase';
import { addDoc,collection } from 'firebase/firestore';
import Header from '../components/Header';

const CreatePost = () => {
    const [post,setPost]= useState('');
    const navigate = useNavigate();

    const addPost = async ()=>{
     try{
        let postCollection = collection(db,"post");
        await addDoc(postCollection,{
            userId: auth.currentUser.uid,
            content: post,
        });
        navigate('/');
     }
     catch(e){
        console.log(e);
     }
    }

    return (
        <div className="CreatePost">
            <Header></Header>
            <div className="formBody">
                <div className="formOutline">
                    <h3>Create Post</h3>
                    <div className="inputArea">
                        <div className="postForm inputChunk">
                            <label>Post</label>
                            <input type="text" placeholder='...' id='postInput'
                             onChange={(e)=>{setPost(e.target.value)}}/>
                        </div>
                        <div className="buttonArea">
                            <button onClick={()=>{addPost()}}>Add Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default CreatePost;