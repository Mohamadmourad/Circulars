import '../styles/forms.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="Login">
            <div className="formBody">
                <div className="formOutline">
                    <h3>LogIn</h3>
                    <div className="inputArea">
                        <div className="emailForm inputChunk">
                            <label>email</label>
                            <input type="email" placeholder='Enter your email'/>
                        </div>
                        <div className="passwordForm inputChunk">
                            <label>Password</label>
                            <input type="password" placeholder='Enter a password'/>
                        </div>

                        <div className="buttonArea">
                            <span>Don't have an account? <Link to="/SignUp" > SignUp</Link></span>
                            <button>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Login;