import '../styles/forms.css'
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import { db,auth } from '../config/firebase';
import { addDoc,collection } from 'firebase/firestore';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import firebase from 'firebase/compat/app';
import { Timestamp } from 'firebase/compat/firestore';

const CreatePost = () => {
    const postRef = useRef(null);
    let timeNow = firebase.firestore.Timestamp.now();
    const navigate = useNavigate();

    const addPost = async ()=>{
     try{
        const post = postRef.current.value;
        let postCollection = collection(db,"post");
        await addDoc(postCollection,{
            userId: auth.currentUser.uid,
            content: post,
            time : timeNow
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
                            <textarea placeholder='Write a new post' id='postInput'
                             ref={postRef}>

                             </textarea>
                        </div>
                        <div className="buttonArea">
                            <button onClick={()=>{addPost()}}>Add Post</button>
                        </div>
                    </div>
                </div>
            </div>
            <BottomNav />
        </div>
    );
}
 
export default CreatePost;