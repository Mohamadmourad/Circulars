import '../styles/forms.css'
import { Link } from 'react-router-dom';


const CreateProfile = () => {
    return (
        <div className="CreateProfile">
             <div className="formBody">
                <div className="formOutline">
                    <h3>SignUp</h3>
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
                            <button>Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default CreateProfile;