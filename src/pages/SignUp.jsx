import '../styles/forms.css'
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="SignUp">
            <div className="formBody">
                <div className="formOutline">
                    <h3>SignUp</h3>
                    <div className="inputArea">
                        <div className="usernameForm inputChunk">
                            <label>Username</label>
                            <input type="text" placeholder='Ex: mourad511'/>
                        </div>
                        <div className="emailForm inputChunk">
                            <label>Email</label>
                            <input type="email" placeholder='example@gmail.com'/>
                        </div>
                        <div className="passwordForm inputChunk">
                            <label>Password</label>
                            <input type="password" placeholder='Enter a password'/>
                        </div>
                        <div className="confirmPasswordForm inputChunk">
                            <label>Confirm Password</label>
                            <input type="password" placeholder='Re-enter Your Password'/>
                        </div>

                        <div className="buttonArea">
                            <span>Have an account? <Link to="/Login" > Login</Link></span>
                            <Link to="/CreateProfile"> Next</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;