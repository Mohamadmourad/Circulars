import '../styles/forms.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';

const Login = () => {
    const navigate = useNavigate();
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [error,setError] = useState('');

    const login = async ()=>{
      try{
        await signInWithEmailAndPassword(auth,email,password);
        navigate('/');
      }
      catch(e){
        console.log(e);
        setError('invalid email or password');
      }
    }

    return (
        <div className="Login">
            <div className="formBody">
                <div className="formOutline">
                    <h3>LogIn</h3>
                    <div className="inputArea">
                        <div className="emailForm inputChunk">
                            <label>email</label>
                            <input type="email" placeholder='Enter your email'
                            onChange={(e)=>{setEmail(e.target.value)
                                setError('')}}/>
                            <span>{error}</span>
                        </div>
                        <div className="passwordForm inputChunk">
                            <label>Password</label>
                            <input type="password" placeholder='Enter a password'
                            onChange={(e)=>{setPassword(e.target.value)
                                setError('')}}/>
                        </div>

                        <div className="buttonArea">
                            <span>Don't have an account? <Link to="/SignUp" > SignUp</Link></span>
                            <button onClick={()=>{login()}}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Login;