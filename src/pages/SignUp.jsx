import '../styles/forms.css'
import { Link } from 'react-router-dom';
import createAcc from '../functions/createAcc';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [passwordConfirm,setPasswordConfirm] = useState('');
    const [username,setUsername] = useState('');

    const[passError,setPassError] = useState('');
    const[usernameError,setUsernameError] = useState('');

    const navigate = useNavigate();

    const onSubmit = ()=>{
        if(username.length == 0){
            setUsernameError('Enter username');
            return false;
        }
        if(password.length < 8){
            setPassError('password should atleast be 8 characters');
            return false;
        }
        if(password != passwordConfirm){
            setPassError('passwords are not matching');
            return false;
        }

        createAcc(email,password,username);
        navigate('/');
    }

    return (
        <div className="SignUp">
            <div className="formBody">
                <div className="formOutline">
                    <h3>SignUp</h3>
                    <div className="inputArea">
                        <div className="usernameForm inputChunk">
                            <label>Username</label>
                            <input type="text" placeholder='Ex: mourad511'
                            onChange={(e)=>{setUsername(e.target.value)
                                setUsernameError('')}}/>
                             <span>{usernameError}</span>
                        </div>
                        <div className="emailForm inputChunk">
                            <label>Email</label>
                            <input type="email" placeholder='example@gmail.com' 
                            onChange={(e)=>{setEmail(e.target.value)}}/>
                        </div>
                        <div className="passwordForm inputChunk">
                            <label>Password</label>
                            <input type="password" placeholder='Enter a password' onChange={(e)=>{setPassword(e.target.value)
                             setPassError('')}}/>
                            <span>{passError}</span>
                        </div>
                        <div className="confirmPasswordForm inputChunk">
                            <label>Confirm Password</label>
                            <input type="password" placeholder='Re-enter Your Password'
                            onChange={(e)=>{setPasswordConfirm(e.target.value)}}/>
                        </div>

                        <div className="buttonArea">
                            <span>Have an account? <Link to="/Login" >Login</Link></span>
                            <button onClick={()=>{onSubmit()}}> Signup</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;