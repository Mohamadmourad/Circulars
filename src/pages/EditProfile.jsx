import "../styles/editProfile.css";

const EditProfile = () => {
  return (
    <div className="editProfile">
      <div className="changePhotoArea">
        <div className="photo"></div>
      </div>

      <div className="edits">
        <div className="changeUsernameArea">
          <label htmlFor="changeUsername">Change Username</label>
          <input
            className="changeUsername"
            type="text"
            id="changeUsername"
            placeholder="New Username"
          />
        </div>
        <div className="changeBioArea">
          <label htmlFor="changeBio">Change Bio</label>
          <textarea
            className="changeBio"
            id="changeBio"
            placeholder="New Bio"
          ></textarea>
        </div>
      </div>
      <div className="buttonArea">
        <button className="saveBtn">Save Changes</button>
      </div>
    </div>
  );
};

export default EditProfile;
