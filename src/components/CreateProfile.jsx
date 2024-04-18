import '../styles/forms.css'
import { Link } from 'react-router-dom';
import createAcc from '../functions/createAcc';


const CreateProfile = ({email,password}) => {
    return (
        <div className="CreateProfile">
             <div className="formBody">
                <div className="formOutline">
                    <h3>CreateProfile</h3>
                    <div className="inputArea">
                        <div className="usernameForm inputChunk">
                            <label>Name</label>
                            <input type="text" placeholder='name'/>
                        </div>
                        <div className="usernameForm inputChunk">
                            <label>Last Name</label>
                            <input type="text" placeholder='Last name'/>
                        </div>
                        <div className="usernameForm inputChunk">
                            <label>Bio</label>
                            <input type="text" placeholder='bio'/>
                        </div>
                        <div className="buttonArea signUpBtnPage">
                            <button onClick={()=>{createAcc(email,password)}}>Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default CreateProfile;